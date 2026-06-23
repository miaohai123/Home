// src/views/Resources.vue
<template>
  <div class="page-resources">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 6px;">资源收藏</h1>
      <p style="color: var(--text-muted); margin-bottom: 32px;">精选开发资源 · 持续更新</p>

      <div class="resources-grid">
        <div v-for="cat in categories" :key="cat.name" class="resource-category">
          <h2 class="cat-title">{{ cat.icon }} {{ cat.name }}</h2>
          <div class="resource-list">
            <a v-for="item in cat.items" :key="item.name" :href="item.url" target="_blank" rel="noopener" class="resource-item glass-sm card-hover">
              <span class="resource-name">{{ item.name }}</span>
              <span class="resource-desc">{{ item.desc }}</span>
            </a>
          </div>
        </div>
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

const categories = ref([
  {
    name: '框架与库', icon: '📦',
    items: [
      { name: 'Vue 3', desc: '渐进式 JavaScript 框架', url: 'https://vuejs.org' },
      { name: 'React', desc: '用于构建用户界面的库', url: 'https://react.dev' },
      { name: 'Tailwind CSS', desc: '实用优先的 CSS 框架', url: 'https://tailwindcss.com' },
    ]
  },
  {
    name: '工具与平台', icon: '🔧',
    items: [
      { name: 'Vite', desc: '下一代前端构建工具', url: 'https://vitejs.dev' },
      { name: 'GitHub', desc: '代码托管与协作平台', url: 'https://github.com' },
      { name: 'Figma', desc: '协作式界面设计工具', url: 'https://figma.com' },
    ]
  },
  {
    name: '学习与文档', icon: '📚',
    items: [
      { name: 'MDN Web Docs', desc: 'Web 开发权威文档', url: 'https://developer.mozilla.org' },
      { name: 'DevDocs', desc: '多语言 API 文档聚合', url: 'https://devdocs.io' },
      { name: 'CSS-Tricks', desc: 'CSS 技巧与教程', url: 'https://css-tricks.com' },
    ]
  },
])
</script>

<style scoped>
.resource-category {
  margin-bottom: 32px;
}
.cat-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 14px;
  letter-spacing: 0.3px;
}
.resource-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
.resource-item {
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  transition: all var(--transition-smooth);
  background: var(--bg-glass);
  color: var(--text-primary);
}
.resource-item:hover {
  color: var(--text-primary);
}
.resource-name {
  font-weight: 500;
  font-size: 15px;
}
.resource-desc {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 2px;
}
</style>