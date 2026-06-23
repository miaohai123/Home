// src/views/BlogDetail.vue
<template>
  <div class="page-blog-detail">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px; max-width: 820px;">
      <article v-if="post" class="detail-card glass" style="padding: 40px 36px;">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="post-tag">{{ post.tag }}</span>
          <span style="font-size: 13px; color: var(--text-muted);">{{ post.date }}</span>
        </div>
        <h1 style="font-size: 2.2rem; font-weight: 700; line-height: 1.2; margin-bottom: 16px;">{{ post.title }}</h1>
        <div style="color: var(--text-secondary); font-size: 14px; margin-bottom: 28px; display: flex; gap: 20px; flex-wrap: wrap;">
          <span>📖 {{ post.readTime }}</span>
          <span>👁 {{ post.views }} 浏览</span>
        </div>
        <div class="blog-content" v-html="post.content"></div>
        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(100,216,255,0.06);">
          <router-link to="/blog" style="color: var(--text-muted); font-size: 14px;">← 返回博客列表</router-link>
        </div>
      </article>
      <div v-else style="text-align: center; padding: 60px 0;">
        <p style="color: var(--text-muted);">文章不存在或已被删除</p>
        <router-link to="/blog" style="color: var(--accent-cyan);">返回博客</router-link>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import StarTrail from '@/components/StarTrail.vue'

const route = useRoute()
const post = ref(null)

const postsData = {
  1: {
    id: 1, tag: 'Vue', title: 'Vue 3 组合式 API 最佳实践',
    date: '2026-06-20', readTime: '8 min', views: 342,
    content: `
      <h2>响应式原理</h2>
      <p>Vue 3 的响应式系统基于 <code>Proxy</code> 实现，相比 Vue 2 的 <code>Object.defineProperty</code> 具有更好的性能和更完整的响应式覆盖。</p>
      <pre><code>import { ref, reactive, computed, watch } from 'vue'

const count = ref(0)
const state = reactive({ name: 'Vue' })
const double = computed(() => count.value * 2)

watch(count, (newVal) => {
  console.log('count changed:', newVal)
})</code></pre>
      <h3>组合式函数</h3>
      <p>通过组合式函数（Composables）实现逻辑复用，让代码更加清晰和可维护。</p>
      <pre><code>// useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  const double = computed(() => count.value * 2)
  const increment = () => count.value++
  return { count, double, increment }
}</code></pre>
    `
  },
  2: {
    id: 2, tag: '设计', title: '极简主义在 UI 设计中的运用',
    date: '2026-06-15', readTime: '6 min', views: 215,
    content: `
      <h2>减法设计思维</h2>
      <p>极简主义不是简单，而是经过深思熟虑后的精炼。每个元素都应有其存在的理由。</p>
      <h3>留白的艺术</h3>
      <p>充足的留白能让内容呼吸，提升阅读体验与视觉层次感。</p>
      <h3>色彩与排版</h3>
      <p>克制地使用色彩，选择高质量字体，让内容成为视觉的中心。</p>
    `
  },
  3: {
    id: 3, tag: '工程化', title: 'Vite 插件开发实战',
    date: '2026-06-10', readTime: '10 min', views: 189,
    content: `
      <h2>Vite 插件机制</h2>
      <p>Vite 提供了丰富的插件 API，让开发者可以轻松扩展构建流程。</p>
      <pre><code>// my-plugin.js
export default function myPlugin() {
  return {
    name: 'my-plugin',
    transform(code, id) {
      if (id.endsWith('.custom')) {
        return { code: 'export default ' + JSON.stringify(code) }
      }
    }
  }
}</code></pre>
      <h3>实战：自定义文件处理</h3>
      <p>通过插件处理特殊文件格式，实现个性化构建需求。</p>
    `
  }
}

onMounted(() => {
  const id = route.params.id
  post.value = postsData[id] || null
})
</script>

<style scoped>
.detail-card {
  background: var(--bg-glass);
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
.blog-content {
  color: var(--text-secondary);
  line-height: 1.9;
  font-size: 15px;
}
.blog-content h2 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin: 32px 0 12px;
}
.blog-content h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin: 24px 0 10px;
}
.blog-content p {
  margin-bottom: 16px;
}
.blog-content code {
  font-family: var(--font-code);
  font-size: 0.9em;
  background: rgba(100,216,255,0.04);
  padding: 2px 8px;
  border-radius: 4px;
  color: var(--accent-cyan);
}
.blog-content pre {
  background: rgba(0,0,0,0.3);
  padding: 20px;
  border-radius: var(--radius-sm);
  overflow-x: auto;
  margin: 16px 0;
  border: 1px solid rgba(100,216,255,0.04);
}
.blog-content pre code {
  background: transparent;
  padding: 0;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.7;
}
</style>