// src/views/Resume.vue
<template>
  <div class="page-resume" id="resume">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 40px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
        <h1 class="glow-text" style="font-size: 2rem;">简历</h1>
        <button @click="printResume" class="btn-primary" style="padding: 10px 28px; font-size: 14px;">🖨 打印 / PDF</button>
      </div>

      <div class="resume-content glass" style="padding: 48px 40px; background: var(--bg-glass);">
        <!-- 个人信息 -->
        <div style="display: flex; gap: 32px; flex-wrap: wrap; margin-bottom: 32px; align-items: center;">
          <div>
            <h1 style="font-size: 2.2rem; font-weight: 700; letter-spacing: -1px;">林一</h1>
            <p style="color: var(--text-secondary); font-size: 1.05rem;">全栈开发 · 5年经验</p>
          </div>
          <div style="margin-left: auto; text-align: right; color: var(--text-muted); font-size: 14px; line-height: 1.8;">
            <div>📧 dev@example.com</div>
            <div>📍 中国 · 远程</div>
            <div>🔗 github.com/linyi</div>
          </div>
        </div>

        <hr style="border-color: rgba(100,216,255,0.06); margin: 20px 0;">

        <!-- 简介 -->
        <div style="margin-bottom: 28px;">
          <h3 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 8px;">专业简介</h3>
          <p style="color: var(--text-secondary); line-height: 1.8; font-size: 14px;">
            全栈开发者，拥有 5 年以上 Web 开发经验。擅长 Vue 3、React、Node.js 等技术栈，
            注重代码质量与用户体验，热爱开源与技术分享。
          </p>
        </div>

        <!-- 技能 -->
        <div style="margin-bottom: 28px;">
          <h3 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 10px;">技术技能</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            <span v-for="s in skills" :key="s" class="skill-tag">{{ s }}</span>
          </div>
        </div>

        <!-- 工作经历 -->
        <div style="margin-bottom: 28px;">
          <h3 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 14px;">工作经历</h3>
          <div v-for="job in experience" :key="job.company" style="margin-bottom: 18px;">
            <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px;">
              <strong style="font-size: 16px;">{{ job.company }}</strong>
              <span style="color: var(--text-muted); font-size: 13px;">{{ job.period }}</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.6;">{{ job.desc }}</p>
          </div>
        </div>

        <!-- 教育 -->
        <div>
          <h3 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 10px;">教育背景</h3>
          <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px;">
            <span style="font-size: 15px;">计算机科学与技术 · 本科</span>
            <span style="color: var(--text-muted); font-size: 13px;">2017 – 2021</span>
          </div>
          <p style="color: var(--text-secondary); font-size: 14px;">某知名大学 · 优秀毕业生</p>
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

const skills = ref(['Vue 3', 'React', 'TypeScript', 'Node.js', 'Python', 'Go', 'Docker', 'GraphQL', 'PostgreSQL', 'Redis'])
const experience = ref([
  { company: '某科技公司 · 高级全栈开发', period: '2022 – 至今', desc: '负责核心产品的前后端架构设计与开发，主导技术选型与团队规范制定。' },
  { company: '某互联网企业 · 前端开发', period: '2020 – 2022', desc: '参与多个中大型项目的前端开发，优化性能与用户体验，推动组件库建设。' },
])

const printResume = () => {
  window.print()
}
</script>

<style>
@media print {
  .page-resume .header,
  .page-resume .footer,
  .page-resume .btn-primary,
  .page-resume .star-canvas,
  .page-resume .particle-canvas {
    display: none !important;
  }
  .page-resume {
    background: #fff !important;
    color: #111 !important;
  }
  .page-resume .glass {
    background: #fff !important;
    backdrop-filter: none !important;
    border: 1px solid #eee !important;
    box-shadow: none !important;
  }
  .page-resume .glow-text {
    background: none !important;
    -webkit-text-fill-color: #111 !important;
    color: #111 !important;
    text-shadow: none !important;
  }
  .page-resume .resume-content {
    padding: 32px !important;
  }
  .page-resume .skill-tag {
    background: #f0f2f5 !important;
    color: #333 !important;
    border-color: #e0e0e0 !important;
  }
  .page-resume [style*="color: var(--text-secondary)"] {
    color: #555 !important;
  }
  .page-resume [style*="color: var(--text-muted)"] {
    color: #888 !important;
  }
  .page-resume hr {
    border-color: #eee !important;
  }
  .page-resume .container {
    padding: 0 20px !important;
    max-width: 100% !important;
  }
  .page-resume {
    padding-top: 20px !important;
  }
}
</style>

<style scoped>
.resume-content {
  background: var(--bg-glass);
}
.skill-tag {
  padding: 4px 14px;
  border-radius: 16px;
  font-size: 12px;
  background: rgba(100,216,255,0.04);
  color: var(--text-secondary);
  border: 1px solid rgba(100,216,255,0.06);
  font-family: var(--font-code);
}
</style>