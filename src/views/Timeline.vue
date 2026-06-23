// src/views/Timeline.vue
<template>
  <div class="page-timeline">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 6px;">成长时光轴</h1>
      <p style="color: var(--text-muted); margin-bottom: 40px;">记录每一个值得铭记的里程碑</p>

      <div class="timeline">
        <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
          <div class="timeline-marker" :style="{ background: item.color || 'var(--accent-cyan)' }">
            <span>{{ item.emoji }}</span>
          </div>
          <div class="timeline-content glass card-hover">
            <div class="timeline-date">{{ item.date }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
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

const timelineItems = ref([
  { date: '2026-06', title: '重构个人作品集网站', desc: '全面升级设计系统，采用 Vue 3 + Vite 架构，实现极简科技风视觉。', emoji: '🚀', color: '#64d8ff' },
  { date: '2026-04', title: '开源组件库发布', desc: '正式开源基于 Vue 3 的 UI 组件库，获得 500+ star。', emoji: '📦', color: '#4a9eff' },
  { date: '2025-12', title: '技术博客突破 100 篇', desc: '持续输出技术文章，累计阅读量超过 10 万次。', emoji: '✍️', color: '#7b6cff' },
  { date: '2025-08', title: '加入开源社区核心团队', desc: '成为某知名开源项目的核心贡献者，参与架构设计与代码评审。', emoji: '🌟', color: '#64d8ff' },
  { date: '2024-06', title: '全栈项目交付突破', desc: '成功交付 20+ 企业级项目，涵盖电商、教育、金融等领域。', emoji: '🏆', color: '#4a9eff' },
  { date: '2023-09', title: '技术演讲与分享', desc: '在技术大会上发表主题演讲，分享前端工程化实践经验。', emoji: '🎤', color: '#7b6cff' },
  { date: '2022-03', title: '职业转型 · 全栈开发', desc: '从纯前端转向全栈开发，深入学习 Node.js 与云原生技术。', emoji: '🔄', color: '#64d8ff' },
  { date: '2021-06', title: '第一份开发工作', desc: '正式入职互联网公司，开启 professional 开发职业生涯。', emoji: '💼', color: '#4a9eff' },
  { date: '2020-09', title: '开启技术博客', desc: '创建个人技术博客，记录学习心得与项目实践。', emoji: '📝', color: '#7b6cff' },
  { date: '2019-03', title: '第一个开源贡献', desc: '为开源项目提交第一个 PR，正式参与开源社区。', emoji: '🔓', color: '#64d8ff' },
])
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 32px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), var(--accent-cyan));
  opacity: 0.3;
}
.timeline-item {
  position: relative;
  margin-bottom: 28px;
  display: flex;
  gap: 20px;
}
.timeline-marker {
  position: absolute;
  left: -32px;
  top: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 0 24px rgba(74, 158, 255, 0.15);
  flex-shrink: 0;
}
.timeline-content {
  flex: 1;
  padding: 20px 24px;
  transition: all var(--transition-smooth);
  background: var(--bg-glass);
}
.timeline-date {
  font-size: 12px;
  color: var(--text-muted);
  font-family: var(--font-code);
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}
.timeline-content h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 4px;
}
.timeline-content p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}
@media (max-width: 600px) {
  .timeline {
    padding-left: 24px;
  }
  .timeline-marker {
    left: -24px;
    width: 16px;
    height: 16px;
    font-size: 9px;
  }
}
</style>