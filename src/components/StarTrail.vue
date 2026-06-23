// src/components/StarTrail.vue
<template>
  <canvas ref="canvasRef" class="star-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let stars = []
let animationId = null
let mouseX = -9999
let mouseY = -9999

class Star {
  constructor(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.size = Math.random() * 2.5 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.15
    this.speedY = (Math.random() - 0.5) * 0.15
    this.opacity = Math.random() * 0.6 + 0.2
    this.pulse = Math.random() * Math.PI * 2
    this.pulseSpeed = 0.008 + Math.random() * 0.015
  }

  update(w, h) {
    this.x += this.speedX
    this.y += this.speedY
    this.pulse += this.pulseSpeed
    if (this.x < 0) this.x = w
    if (this.x > w) this.x = 0
    if (this.y < 0) this.y = h
    if (this.y > h) this.y = 0
  }

  draw(ctx) {
    const alpha = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse))
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(180, 220, 255, ${alpha})`
    ctx.fill()
    // 发光
    if (this.size > 1.5) {
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4)
      grad.addColorStop(0, `rgba(100, 216, 255, ${alpha * 0.15})`)
      grad.addColorStop(1, 'rgba(100, 216, 255, 0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

function initStars(w, h) {
  stars = []
  for (let i = 0; i < 60; i++) {
    stars.push(new Star(w, h))
  }
}

function animate() {
  if (!ctx) return
  const canvas = canvasRef.value
  const w = canvas.width
  const h = canvas.height
  ctx.clearRect(0, 0, w, h)

  // 鼠标附近星星聚集效果
  for (const star of stars) {
    const dx = star.x - mouseX
    const dy = star.y - mouseY
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 120 && dist > 1) {
      const force = (1 - dist / 120) * 0.3
      star.x += (mouseX - star.x) * force * 0.015
      star.y += (mouseY - star.y) * force * 0.015
    }
    star.update(w, h)
    star.draw(ctx)
  }

  animationId = requestAnimationFrame(animate)
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const parent = canvas.parentElement
  const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight }
  canvas.width = rect.width || window.innerWidth
  canvas.height = rect.height || window.innerHeight
  initStars(canvas.width, canvas.height)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const handleMove = (e) => {
    const rect = canvas.getBoundingClientRect()
    const cx = e.clientX || (e.touches && e.touches[0]?.clientX)
    const cy = e.clientY || (e.touches && e.touches[0]?.clientY)
    if (cx != null && cy != null) {
      mouseX = cx - rect.left
      mouseY = cy - rect.top
    }
  }
  const handleLeave = () => { mouseX = -9999; mouseY = -9999 }

  canvas.addEventListener('mousemove', handleMove)
  canvas.addEventListener('touchmove', handleMove, { passive: true })
  canvas.addEventListener('mouseleave', handleLeave)

  animate()

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resizeCanvas)
    canvas.removeEventListener('mousemove', handleMove)
    canvas.removeEventListener('touchmove', handleMove)
    canvas.removeEventListener('mouseleave', handleLeave)
  })
})
</script>

<style scoped>
.star-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.7;
}
</style>