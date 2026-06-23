// src/components/AppHeader.vue
<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-inner container">
      <router-link to="/" class="logo" @click="closeMenu">
        <span class="logo-icon">◈</span>
        <span class="logo-text glow-text">DevPort</span>
      </router-link>

      <nav class="nav" :class="{ 'nav-open': store.isMenuOpen }">
        <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link" @click="closeMenu">
          {{ item.label }}
        </router-link>
      </nav>

      <button class="menu-toggle" @click="store.toggleMenu" aria-label="切换菜单">
        <span class="bar" :class="{ 'bar-open': store.isMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-open': store.isMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-open': store.isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/app'

const store = useAppStore()
const isScrolled = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于' },
  { path: '/projects', label: '作品' },
  { path: '/blog', label: '博客' },
  { path: '/tools', label: '工具' },
  { path: '/contact', label: '联系' },
]

const closeMenu = () => store.closeMenu()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 14px 0;
  transition: background var(--transition-smooth), box-shadow var(--transition-smooth);
  background: transparent;
}
.header-scrolled {
  background: rgba(11, 14, 20, 0.78);
  backdrop-filter: blur(18px) saturate(1.2);
  -webkit-backdrop-filter: blur(18px) saturate(1.2);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(100, 216, 255, 0.06);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--text-primary);
}
.logo-icon {
  font-size: 22px;
  color: var(--accent-cyan);
  opacity: 0.8;
}
.logo-text {
  font-family: var(--font-code);
  font-weight: 600;
}

.nav {
  display: flex;
  gap: 8px;
  align-items: center;
}
.nav-link {
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 40px;
  transition: all var(--transition-smooth);
  position: relative;
  letter-spacing: 0.3px;
}
.nav-link:hover {
  color: #fff;
  background: rgba(100, 216, 255, 0.08);
}
.nav-link.router-link-active {
  color: var(--accent-cyan);
  background: rgba(100, 216, 255, 0.1);
  box-shadow: 0 0 20px rgba(74, 158, 255, 0.05);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}
.bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 4px;
  transition: all 0.3s ease;
  transform-origin: center;
}
.bar-open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar-open:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.bar-open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 820px) {
  .menu-toggle {
    display: flex;
  }
  .nav {
    position: fixed;
    top: 0;
    right: -320px;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    background: rgba(11, 14, 20, 0.92);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-left: 1px solid rgba(100, 216, 255, 0.06);
    padding: 40px 32px;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -8px 0 60px rgba(0, 0, 0, 0.5);
  }
  .nav-open {
    right: 0;
  }
  .nav-link {
    font-size: 18px;
    padding: 10px 20px;
    width: 100%;
    text-align: center;
  }
}
</style>