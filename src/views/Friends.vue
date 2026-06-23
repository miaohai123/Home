// src/views/Friends.vue
<template>
  <div class="page-friends">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 6px;">友情链接</h1>
      <p style="color: var(--text-muted); margin-bottom: 32px;">志同道合的伙伴与优秀站点</p>

      <div class="friends-grid">
        <a v-for="friend in friends" :key="friend.name" :href="friend.url" target="_blank" rel="noopener" class="friend-card glass card-hover">
          <div class="friend-avatar">{{ friend.emoji }}</div>
          <div class="friend-info">
            <h3>{{ friend.name }}</h3>
            <p>{{ friend.desc }}</p>
          </div>
        </a>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import StarTrail from '@/components/StarTrail.vue'

const friends = ref([
  { name: 'Vue.js 官方', desc: '渐进式 JavaScript 框架', url: 'https://vuejs.org', emoji: '🟢' },
  { name: 'React 官方', desc: '用于构建用户界面的库', url: 'https://react.dev', emoji: '⚛️' },
  { name: 'Tailwind CSS', desc: '实用优先的 CSS 框架', url: 'https://tailwindcss.com', emoji: '🌊' },
  { name: 'Vite', desc: '下一代前端构建工具', url: 'https://vitejs.dev', emoji: '⚡' },
  { name: 'MDN Web Docs', desc: 'Web 开发权威文档', url: 'https://developer.mozilla.org', emoji: '📚' },
  { name: 'GitHub', desc: '全球最大的代码托管平台', url: 'https://github.com', emoji: '🐙' },
])
</script>

<style scoped>
.friends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}
.friend-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 22px;
  transition: all var(--transition-smooth);
  color: var(--text-primary);
  background: var(--bg-glass);
}
.friend-card:hover {
  color: var(--text-primary);
}
.friend-avatar {
  font-size: 32px;
  flex-shrink: 0;
}
.friend-info h3 {
  font-size: 16px;
  font-weight: 600;
}
.friend-info p {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0;
}
</style>