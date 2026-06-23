// src/views/BlogArchive.vue
<template>
  <div class="page-archive">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 6px;">博客归档</h1>
      <p style="color: var(--text-muted); margin-bottom: 32px;">按时间梳理所有文章</p>

      <div class="archive-timeline">
        <div v-for="year in archiveYears" :key="year" class="archive-year">
          <h2 class="year-label">{{ year }}</h2>
          <div class="archive-list">
            <div v-for="post in getPostsByYear(year)" :key="post.id" class="archive-item glass-sm card-hover">
              <router-link :to="`/blog/${post.id}`" style="display: flex; justify-content: space-between; align-items: center; padding: 14px 20px; color: inherit; flex-wrap: wrap; gap: 8px;">
                <span style="font-weight: 500;">{{ post.title }}</span>
                <span style="font-size: 13px; color: var(--text-muted);">{{ post.date }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import StarTrail from '@/components/StarTrail.vue'

const allPosts = ref([
  { id: 1, title: 'Vue 3 组合式 API 最佳实践', date: '2026-06-20' },
  { id: 2, title: '极简主义在 UI 设计中的运用', date: '2026-06-15' },
  { id: 3, title: 'Vite 插件开发实战', date: '2026-06-10' },
  { id: 4, title: 'React 19 新特性解析', date: '2026-06-05' },
  { id: 5, title: '前端算法与数据结构实战', date: '2026-05-28' },
  { id: 6, title: 'Go 语言并发模型深度剖析', date: '2026-05-20' },
])

const archiveYears = computed(() => {
  const years = new Set()
  allPosts.value.forEach(p => {
    const y = p.date.slice(0, 4)
    years.add(y)
  })
  return Array.from(years).sort((a, b) => b - a)
})

const getPostsByYear = (year) => {
  return allPosts.value.filter(p => p.date.startsWith(year)).sort((a, b) => b.date.localeCompare(a.date))
}
</script>

<style scoped>
.archive-year {
  margin-bottom: 32px;
}
.year-label {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 14px;
  letter-spacing: 0.5px;
  font-family: var(--font-code);
}
.archive-item {
  margin-bottom: 8px;
  transition: all var(--transition-smooth);
  background: var(--bg-glass);
}
.archive-item:hover {
  background: rgba(20,30,42,0.7);
}
</style>