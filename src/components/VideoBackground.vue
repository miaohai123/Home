<template>
  <div ref="wrap" class="video-bg">
    <video
      v-if="showVideo && current"
      ref="videoEl"
      class="bg-video"
      :poster="current.poster"
      playsinline
      autoplay
      muted
      loop
      preload="none"
      tabindex="-1"
    >
      <source v-if="current.webm" :src="current.webm" type="video/webm" />
      <source v-if="current.mp4" :src="current.mp4" type="video/mp4" />
    </video>

    <audio ref="audioEl" v-if="audioSrc" :src="audioSrc" loop preload="auto" crossorigin="anonymous"></audio>

    <div v-else-if="current" class="video-poster" :style="current.poster ? { backgroundImage: `url(${current.poster})` } : { background: 'linear-gradient(135deg, rgba(20,30,42,0.85), rgba(12,15,22,0.8))' }"></div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const MOBILE_MAX = 640
const REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const publicBase = import.meta.env.BASE_URL || '/'

const options = [
  {
    id: 'waterfall',
    title: 'Waterfall',
    mp4: `${publicBase}videos/mixkit-waterfall-in-forest-2213-full-hd.mp4`,
    webm: `${publicBase}videos/mixkit-waterfall-in-forest-2213-full-hd.webm`,
    poster: `${publicBase}videos/mixkit-waterfall-in-forest-2213-full-hd-poster.jpg`,
    audio: `${publicBase}audio/waterfall-loop.mp3`
  }
]

const wrap = ref(null)
const videoEl = ref(null)
const audioEl = ref(null)
const selectedIndex = ref(0)
const hasIntersected = ref(false)
const isMobile = typeof window !== 'undefined' && window.innerWidth <= MOBILE_MAX
const audioOn = ref(false)

const current = computed(() => options[selectedIndex.value])
const audioSrc = computed(() => current.value?.audio || `${publicBase}audio/waterfall-loop.mp3`)
const showVideo = computed(() => {
  if (!hasIntersected.value) return false
  if (REDUCED_MOTION) return false
  if (isMobile) return false
  return !!(current.value && (current.value.mp4 || current.value.webm))
})

watch(current, () => {
  // reload audio when background option changes
  if (audioEl.value) {
    audioEl.value.load()
    if (audioOn.value) {
      tryPlayAudio()
    }
  }
})



async function tryPlayAudio() {
  if (!audioEl.value) return
  try {
    await audioEl.value.play()
    audioOn.value = true
  } catch (err) {
    audioOn.value = false
  }
}

function fadeAudio(targetVolume = 0.65, duration = 600) {
  if (!audioEl.value) return
  const start = isNaN(audioEl.value.volume) ? 0 : audioEl.value.volume
  const steps = Math.max(1, Math.floor(duration / 16))
  const delta = targetVolume - start
  let step = 0
  if (targetVolume > 0) {
    try {
      const p = audioEl.value.play()
      if (p && p.then) {
        p.then(() => { audioOn.value = true }).catch(() => { audioOn.value = false })
      }
      // optimistically set audioOn (will be corrected if play is blocked)
      audioOn.value = true
    } catch (e) {
      audioOn.value = false
    }
  }
  function tick() {
    step++
    const v = start + (delta * (step / steps))
    audioEl.value.volume = Math.max(0, Math.min(1, v))
    if (step < steps) requestAnimationFrame(tick)
    else {
      if (targetVolume === 0) {
        audioEl.value.pause()
        audioOn.value = false
      } else {
        audioOn.value = true
      }
    }
  }
  requestAnimationFrame(tick)
}

function toggleAudio() {
  if (!audioEl.value) return
  if (audioOn.value) {
    fadeAudio(0, 400)
    audioOn.value = false
    try { localStorage.setItem('videoBgAudioOn', 'false') } catch (e) { }
  } else {
    fadeAudio(0.5, 300)
    audioOn.value = true
    try { localStorage.setItem('videoBgAudioOn', 'true') } catch (e) { }
  }
}

let io = null

onMounted(() => {
  if (!wrap.value) return

  // one-time gesture: if user interacts (click/tap/keydown), try to start audio (no visible prompt)
  const gesturePlay = async () => {
    if (!audioEl.value) return
    try {
      audioEl.value.muted = false
      audioEl.value.volume = 0
      await audioEl.value.play()
      fadeAudio(0.5, 300)
      audioOn.value = true
      try { localStorage.setItem('videoBgAudioOn', 'true') } catch (e) { }
    } catch (err) {
      audioOn.value = false
    }
    window.removeEventListener('pointerdown', gesturePlay)
    window.removeEventListener('keydown', gesturePlay)
  }
  window.addEventListener('pointerdown', gesturePlay, { once: true })
  window.addEventListener('keydown', gesturePlay, { once: true })

  io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        hasIntersected.value = true
        // 尝试播放静音视频以满足 autoplay
        requestAnimationFrame(() => {
          if (videoEl.value && showVideo.value) {
            const p = videoEl.value.play()
            if (p && p.catch) p.catch(() => { /* ignore autoplay errors */ })
          }
          // 尝试预加载音频
          if (audioEl.value) {
            audioEl.value.load()
          }
        })
      }
    }
  }, { threshold: 0.25 })

  io.observe(wrap.value)

  // 强制在页面加载后 3s 尝试播放有声音的音轨（按你的要求，不静音）
  if (!isMobile && !REDUCED_MOTION) {
    setTimeout(async () => {
      if (!audioEl.value) return
      try {
        audioEl.value.muted = false
        audioEl.value.volume = 0
        await audioEl.value.play()
        // 平滑渐入到默认音量
        fadeAudio(0.5, 300)
        audioOn.value = true
        try { localStorage.setItem('videoBgAudioOn', 'true') } catch (e) { }
      } catch (err) {
        // 如果被浏览器阻止，保持静音状态; gesturePlay will try on user interaction
        audioOn.value = false
      }
    }, 3000)
  }
})

onUnmounted(() => {
  if (io && wrap.value) io.unobserve(wrap.value)
})
</script>

<style scoped>
.video-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}
.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.95) contrast(0.98) brightness(0.55);
  transform-origin: center;
}
.video-poster {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.45) saturate(0.9);
}

/* 无障碍隐藏文本 */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
</style>