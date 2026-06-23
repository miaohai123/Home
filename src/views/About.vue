// src/views/About.vue
<template>
  <div class="page-about">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <div class="about-grid">
        <div class="about-main glass" style="padding: 40px 36px;">
          <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 20px;">关于我</h1>
          <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 24px;">
            你好！我是林一，一名热爱全栈开发与交互设计的程序员。
            拥有 5 年以上的 Web 开发经验，专注于构建高性能、美观且用户友好的数字产品。
          </p>
          <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 32px;">
            我相信代码不仅是逻辑的呈现，更是设计思维的延伸。
            从像素级细节到系统架构，我始终追求卓越与优雅。
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap: 16px;">
            <div class="stat-item"><span class="stat-num">5+</span><span class="stat-label">年经验</span></div>
            <div class="stat-item"><span class="stat-num">30+</span><span class="stat-label">项目交付</span></div>
            <div class="stat-item"><span class="stat-num">12</span><span class="stat-label">技术栈</span></div>
          </div>
        </div>
        <div class="about-side glass" style="padding: 32px 28px;">
          <h3 style="margin-bottom: 16px; font-size: 1.1rem;">核心技能</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
          <hr style="border-color: rgba(100,216,255,0.06); margin: 24px 0;">
          <h3 style="margin-bottom: 12px; font-size: 1.1rem;">兴趣领域</h3>
          <ul style="list-style: none; color: var(--text-secondary); font-size: 14px; line-height: 2;">
            <li>✦ 交互设计与动效</li>
            <li>✦ 开源社区贡献</li>
            <li>✦ 技术写作与分享</li>
            <li>✦ 摄影与数字艺术</li>
          </ul>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import StarTrail from '@/components/StarTrail.vue'

const skills = ['Vue 3', 'React', 'TypeScript', 'Node.js', 'Python', 'Go', 'Tailwind', 'Vite', 'Docker', 'GraphQL', 'Figma', 'WebGL']
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;
}
.stat-item {
  text-align: center;
  padding: 16px;
  background: rgba(100,216,255,0.04);
  border-radius: var(--radius-sm);
}
.stat-num {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--font-code);
  color: var(--accent-cyan);
}
.stat-label {
  font-size: 13px;
  color: var(--text-muted);
}
.skill-tag {
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 13px;
  background: rgba(100,216,255,0.06);
  color: var(--text-secondary);
  border: 1px solid rgba(100,216,255,0.06);
  font-family: var(--font-code);
}
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>