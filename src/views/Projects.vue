// src/views/Projects.vue
<template>
  <div class="page-projects">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 8px;">项目作品集</h1>
      <p style="color: var(--text-muted); margin-bottom: 36px;">精选实战项目，展示全栈开发能力</p>

      <div class="projects-grid">
        <div v-for="proj in projects" :key="proj.id" class="project-card glass card-hover">
          <div class="project-cover" :style="{ background: proj.color }">
            <span class="project-emoji">{{ proj.emoji }}</span>
          </div>
          <div class="project-body">
            <h3>{{ proj.title }}</h3>
            <p>{{ proj.desc }}</p>
            <div class="project-tags">
              <span v-for="tag in proj.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a :href="proj.demo" target="_blank" rel="noopener">Demo</a>
              <a :href="proj.code" target="_blank" rel="noopener">Code</a>
            </div>
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

const projects = ref([
  { id: 1, title: 'AI 智能助手', desc: '基于大语言模型的对话式AI助手，支持多轮对话与知识检索', tags: ['Vue 3', 'Python', 'FastAPI'], emoji: '🤖', color: 'linear-gradient(135deg,#1a2a3a,#0d1b2a)', demo: '#', code: '#' },
  { id: 2, title: '数据可视化平台', desc: '实时数据仪表盘，支持多维度分析、图表联动与暗色主题', tags: ['React', 'D3', 'WebSocket'], emoji: '📊', color: 'linear-gradient(135deg,#1a2a3a,#0f1f2e)', demo: '#', code: '#' },
  { id: 3, title: '极简博客系统', desc: '全栈博客平台，支持Markdown写作、标签分类与全文检索', tags: ['Vue 3', 'Node.js', 'MongoDB'], emoji: '📝', color: 'linear-gradient(135deg,#1a2a3a,#0e1c2a)', demo: '#', code: '#' },
  { id: 4, title: '设计系统组件库', desc: '企业级UI组件库，遵循设计令牌规范，支持主题定制', tags: ['TypeScript', 'Vue 3', 'Vite'], emoji: '🎨', color: 'linear-gradient(135deg,#1a2a3a,#0f1f2e)', demo: '#', code: '#' },
])
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.project-card {
  overflow: hidden;
  transition: all var(--transition-smooth);
  background: var(--bg-glass);
}
.project-cover {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}
.project-body {
  padding: 22px 24px 26px;
}
.project-body h3 {
  font-size: 18px;
  margin-bottom: 6px;
}
.project-body p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 14px;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}
.project-tags span {
  font-size: 11px;
  padding: 2px 12px;
  border-radius: 12px;
  background: rgba(100,216,255,0.06);
  color: var(--text-muted);
  font-family: var(--font-code);
}
.project-links {
  display: flex;
  gap: 16px;
}
.project-links a {
  font-size: 13px;
  color: var(--text-muted);
  transition: color var(--transition-smooth);
}
.project-links a:hover {
  color: var(--accent-cyan);
}
</style>