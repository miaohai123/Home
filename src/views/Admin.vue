// src/views/Admin.vue
<template>
  <div class="page-admin">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 6px;">简易后台管理</h1>
      <p style="color: var(--text-muted); margin-bottom: 32px;">内容管理 · 数据概览</p>

      <div class="admin-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap: 16px; margin-bottom: 32px;">
        <div class="stat-card glass" style="padding: 20px; text-align: center;">
          <span style="font-size: 28px;">📝</span>
          <div style="font-size: 24px; font-weight: 700; font-family: var(--font-code); color: var(--accent-cyan);">6</div>
          <span style="color: var(--text-muted); font-size: 13px;">文章总数</span>
        </div>
        <div class="stat-card glass" style="padding: 20px; text-align: center;">
          <span style="font-size: 28px;">🏷️</span>
          <div style="font-size: 24px; font-weight: 700; font-family: var(--font-code); color: var(--accent-cyan);">5</div>
          <span style="color: var(--text-muted); font-size: 13px;">标签分类</span>
        </div>
        <div class="stat-card glass" style="padding: 20px; text-align: center;">
          <span style="font-size: 28px;">👁️</span>
          <div style="font-size: 24px; font-weight: 700; font-family: var(--font-code); color: var(--accent-cyan);">1.2k</div>
          <span style="color: var(--text-muted); font-size: 13px;">总浏览量</span>
        </div>
        <div class="stat-card glass" style="padding: 20px; text-align: center;">
          <span style="font-size: 28px;">💬</span>
          <div style="font-size: 24px; font-weight: 700; font-family: var(--font-code); color: var(--accent-cyan);">8</div>
          <span style="color: var(--text-muted); font-size: 13px;">留言消息</span>
        </div>
      </div>

      <div class="admin-panel glass" style="padding: 28px 24px;">
        <h3 style="margin-bottom: 16px;">📋 近期文章</h3>
        <div class="admin-table">
          <div v-for="post in recentPosts" :key="post.id" class="admin-row">
            <span style="flex: 1; font-weight: 500;">{{ post.title }}</span>
            <span style="color: var(--text-muted); font-size: 13px;">{{ post.date }}</span>
            <span style="font-size: 12px; color: var(--text-muted); background: rgba(100,216,255,0.04); padding: 2px 12px; border-radius: 12px;">{{ post.tag }}</span>
            <button class="admin-action" @click="editPost(post)">编辑</button>
          </div>
        </div>
      </div>

      <div class="admin-panel glass" style="padding: 28px 24px; margin-top: 20px;">
        <h3 style="margin-bottom: 16px;">📩 最新留言</h3>
        <div class="admin-table">
          <div v-for="msg in messages" :key="msg.id" class="admin-row">
            <span style="font-weight: 500;">{{ msg.name }}</span>
            <span style="color: var(--text-secondary); font-size: 13px; flex: 1;">{{ msg.content }}</span>
            <span style="color: var(--text-muted); font-size: 12px;">{{ msg.time }}</span>
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

const recentPosts = ref([
  { id: 1, title: 'Vue 3 组合式 API 最佳实践', date: '2026-06-20', tag: 'Vue' },
  { id: 2, title: '极简主义在 UI 设计中的运用', date: '2026-06-15', tag: '设计' },
  { id: 3, title: 'Vite 插件开发实战', date: '2026-06-10', tag: '工程化' },
])

const messages = ref([
  { id: 1, name: '张三', content: '文章写得很好，受益匪浅！', time: '2026-06-21 14:32' },
  { id: 2, name: '李四', content: '请问有相关的视频教程吗？', time: '2026-06-20 09:15' },
  { id: 3, name: '王五', content: '期待更多关于Vue 3的内容！', time: '2026-06-19 22:40' },
])

const editPost = (post) => {
  alert(`编辑文章：${post.title}`)
}
</script>

<style scoped>
.admin-panel {
  background: var(--bg-glass);
}
.admin-table {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.admin-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: rgba(0,0,0,0.1);
  flex-wrap: wrap;
}
.admin-action {
  padding: 2px 14px;
  border-radius: 12px;
  border: none;
  background: rgba(100,216,255,0.06);
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition-smooth);
  font-family: var(--font-sans);
}
.admin-action:hover {
  background: rgba(100,216,255,0.12);
  color: var(--accent-cyan);
}
.stat-card {
  background: var(--bg-glass);
}
</style>