// src/views/BlogList.vue
<template>
  <div class="page-blog">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 8px;">
        <h1 class="glow-text" style="font-size: 2.4rem;">技术博客</h1>
        <router-link to="/archive" style="font-size: 14px; color: var(--text-muted);">归档 →</router-link>
      </div>
      <p style="color: var(--text-muted); margin-bottom: 32px;">记录思考 · 分享技术 · 持续成长</p>

      <div class="blog-filters" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px;">
        <button v-for="tag in tags" :key="tag" class="filter-btn" :class="{ active: activeTag === tag }" @click="activeTag = tag">
          {{ tag }}
        </button>
        <button class="filter-btn" :class="{ active: activeTag === '全部' }" @click="activeTag = '全部'">全部</button>
      </div>

      <div class="blog-list">
        <article v-for="post in filteredPosts" :key="post.id" class="blog-item glass card-hover">
          <router-link :to="`/blog/${post.id}`" style="display: block; padding: 24px 28px;">
            <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 8px;">
              <span class="post-tag">{{ post.tag }}</span>
              <span style="font-size: 12px; color: var(--text-muted);">{{ post.date }}</span>
            </div>
            <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 6px;">{{ post.title }}</h2>
            <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7;">{{ post.excerpt }}</p>
            <div style="margin-top: 14px; font-size: 13px; color: var(--text-muted);">
              {{ post.readTime }} 阅读 · {{ post.views }} 浏览
            </div>
          </router-link>
        </article>
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

const activeTag = ref('全部')
const tags = ['Vue', 'React', '设计', '工程化', '算法', 'Go']

const posts = ref([
  { id: 1, tag: 'Vue', title: 'Vue 3 组合式 API 最佳实践', excerpt: '深入理解响应式原理与组合式函数设计模式，提升代码复用性与可维护性。', date: '2026-06-20', readTime: '8 min', views: 342 },
  { id: 2, tag: '设计', title: '极简主义在 UI 设计中的运用', excerpt: '如何用减法思维打造高级感界面，提升用户体验与品牌调性。', date: '2026-06-15', readTime: '6 min', views: 215 },
  { id: 3, tag: '工程化', title: 'Vite 插件开发实战', excerpt: '从零构建一个高效的 Vite 插件，深入理解构建工具的内部机制。', date: '2026-06-10', readTime: '10 min', views: 189 },
  { id: 4, tag: 'React', title: 'React 19 新特性解析', excerpt: '探索 React 19 带来的全新特性与性能优化，拥抱更简洁的开发体验。', date: '2026-06-05', readTime: '7 min', views: 276 },
  { id: 5, tag: '算法', title: '前端算法与数据结构实战', excerpt: '结合实际场景，深入理解常用算法与数据结构在前端中的应用。', date: '2026-05-28', readTime: '12 min', views: 154 },
  { id: 6, tag: 'Go', title: 'Go 语言并发模型深度剖析', excerpt: '深入理解 Goroutine 与 Channel 的设计哲学，构建高性能并发服务。', date: '2026-05-20', readTime: '9 min', views: 132 },
])

const filteredPosts = computed(() => {
  if (activeTag.value === '全部') return posts.value
  return posts.value.filter(p => p.tag === activeTag.value)
})
</script>

<style scoped>
.filter-btn {
  padding: 6px 18px;
  border-radius: 20px;
  border: 1px solid rgba(100,216,255,0.08);
  background: transparent;
  color: var(--text-muted);
  font-size: 13px;
  cursor: pointer;
  transition: all var(--transition-smooth);
  font-family: var(--font-sans);
}
.filter-btn:hover {
  border-color: rgba(100,216,255,0.2);
  color: var(--text-primary);
}
.filter-btn.active {
  background: rgba(100,216,255,0.1);
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
}
.blog-item {
  margin-bottom: 18px;
  transition: all var(--transition-smooth);
}
.post-tag {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-cyan);
  background: rgba(100,216,255,0.06);
  padding: 2px 14px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>