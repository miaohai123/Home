// src/components/ParticleBackground.vue
<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let animationId = null
let particles = []
let mouseX = 0
let mouseY = 0

const DEFAULT_PARTICLE_COUNT = 180
const CONNECTION_DIST = 120
let PARTICLE_COUNT = DEFAULT_PARTICLE_COUNT
const MOBILE_MAX_WIDTH = 640
const REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function updateParticleSettings(w) {
  if (REDUCED_MOTION) {
    PARTICLE_COUNT = 0
  } else if (w <= MOBILE_MAX_WIDTH) {
    PARTICLE_COUNT = Math.max(30, Math.floor(DEFAULT_PARTICLE_COUNT * 0.15))
  } else if (w <= 1024) {
    PARTICLE_COUNT = Math.max(60, Math.floor(DEFAULT_PARTICLE_COUNT * 0.5))
  } else {
    PARTICLE_COUNT = DEFAULT_PARTICLE_COUNT
  }
}

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.6
    this.vy = (Math.random() - 0.5) * 0.6
    this.radius = Math.random() * 2.2 + 0.8
    this.opacity = Math.random() * 0.5 + 0.3
  }

  update(w, h) {
    this.x += this.vx
    this.y += this.vy
    if (this.x < 0 || this.x > w) this.vx *= -1
    if (this.y < 0 || this.y > h) this.vy *= -1
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(100, 216, 255, ${this.opacity * 0.5})`
    ctx.fill()
  }
}

function initParticles(w, h) {
  particles = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle(w, h))
  }
}

function drawConnections(ctx, w, h) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < CONNECTION_DIST) {
        const alpha = (1 - dist / CONNECTION_DIST) * 0.25
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(100, 216, 255, ${alpha})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      }
    }
  }
}

function animate() {
  if (!ctx) return
  const canvas = canvasRef.value
  const w = canvas.width
  const h = canvas.height

  ctx.clearRect(0, 0, w, h)

  // 背景微光
  const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.7)
  grad.addColorStop(0, 'rgba(20, 60, 100, 0.06)')
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // 鼠标影响
  for (const p of particles) {
    const dx = p.x - mouseX
    const dy = p.y - mouseY
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 180) {
      const force = (1 - dist / 180) * 0.3
      p.x += (mouseX - p.x) * force * 0.02
      p.y += (mouseY - p.y) * force * 0.02
    }
  }

  for (const p of particles) {
    p.update(w, h)
    p.draw(ctx)
  }

  drawConnections(ctx, w, h)

  // 微弱数据流线条（模拟）
  ctx.strokeStyle = 'rgba(100, 216, 255, 0.04)'
  ctx.lineWidth = 1
  for (let i = 0; i < 8; i++) {
    const y = (i / 8) * h + (Date.now() * 0.01 % (h / 8))
    ctx.beginPath()
    ctx.moveTo(0, y)
    for (let x = 0; x < w; x += 6) {
      const wave = Math.sin(x * 0.02 + Date.now() * 0.0008 + i) * 4
      ctx.lineTo(x, y + wave)
    }
    ctx.stroke()
  }

  animationId = requestAnimationFrame(animate)
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight }
  canvas.width = rect.width || window.innerWidth
  canvas.height = rect.height || window.innerHeight
  updateParticleSettings(canvas.width)
  if (PARTICLE_COUNT === 0) {
    canvas.style.display = 'none'
  } else {
    canvas.style.display = 'block'
  }
  initParticles(canvas.width, canvas.height)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }
  const handleTouchMove = (e) => {
    const touch = e.touches[0]
    if (!touch) return
    const rect = canvas.getBoundingClientRect()
    mouseX = touch.clientX - rect.left
    mouseY = touch.clientY - rect.top
  }

  canvas.addEventListener('mousemove', handleMouseMove)
  canvas.addEventListener('touchmove', handleTouchMove)
  canvas.addEventListener('mouseleave', () => { mouseX = -1000; mouseY = -1000 })

  animate()

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resizeCanvas)
    canvas.removeEventListener('mousemove', handleMouseMove)
    canvas.removeEventListener('touchmove', handleTouchMove)
  })
})
</script>

<style scoped>
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  z-index: 0;
}
</style>