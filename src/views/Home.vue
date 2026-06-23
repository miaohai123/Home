// src/views/Home.vue
<template>
  <div class="home">
    <ParticleBackground />
    <VideoBackground />
    <StarTrail />
    <AppHeader />

    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-avatar">
          <div class="avatar-ring">
            <div class="avatar-inner">
              <span class="avatar-emoji">👨‍💻</span>
            </div>
          </div>
        </div>
        <h1 class="hero-title">
          <span class="hero-greeting">你好，我是</span>
          <span class="glow-text hero-name">妙海</span>
        </h1>
        <p class="hero-subtitle">
          全栈开发 · 专注交互体验与视觉设计
        </p>
        <p class="hero-desc">
          用优雅的代码构建有温度的数字产品，<br class="hide-mobile" />
          在技术与艺术的交汇处持续探索。
        </p>
        <div class="hero-actions">
          <router-link to="/projects" class="btn-primary">查看作品</router-link>
          <router-link to="/contact" class="btn-ghost">联系我</router-link>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <span class="scroll-line"></span>
        <span class="scroll-label">滚动探索</span>
      </div>
    </section>

    <!-- 快捷入口 -->
    <section class="quick-entry container">
      <div class="quick-grid">
        <router-link to="/about" class="quick-card glass-sm card-hover">
          <span class="quick-icon">🧑‍💻</span>
          <h3>关于我</h3>
          <p>了解我的故事与技术旅程</p>
        </router-link>
        <router-link to="/projects" class="quick-card glass-sm card-hover">
          <span class="quick-icon">🚀</span>
          <h3>项目作品</h3>
          <p>精选实战项目与开源贡献</p>
        </router-link>
        <router-link to="/blog" class="quick-card glass-sm card-hover">
          <span class="quick-icon">📝</span>
          <h3>技术博客</h3>
          <p>分享思考与学习笔记</p>
        </router-link>
        <router-link to="/timeline" class="quick-card glass-sm card-hover">
          <span class="quick-icon">📅</span>
          <h3>成长时光轴</h3>
          <p>记录每一个里程碑</p>
        </router-link>
      </div>
    </section>

    <!-- 最新博客 -->
    <section class="container section">
      <div class="section-header">
        <h2 class="section-title glow-text">最新文章</h2>
        <router-link to="/blog" class="section-more">查看全部 →</router-link>
      </div>
      <div class="blog-preview-grid">
        <article v-for="post in latestPosts" :key="post.id" class="blog-card glass card-hover">
          <router-link :to="`/blog/${post.id}`">
            <div class="blog-card-tag">{{ post.tag }}</div>
            <h3 class="blog-card-title">{{ post.title }}</h3>
            <p class="blog-card-excerpt">{{ post.excerpt }}</p>
            <div class="blog-card-meta">
              <span>{{ post.date }}</span>
              <span>· {{ post.readTime }}</span>
            </div>
          </router-link>
        </article>
      </div>
    </section>

    <!-- 技术标签云 -->
    <section class="container section">
      <div class="section-header">
        <h2 class="section-title glow-text">技术栈</h2>
      </div>
      <div class="tech-cloud">
        <span v-for="tech in techStack" :key="tech" class="tech-tag" :style="{ fontSize: getTechSize(tech) }">
          {{ tech }}
        </span>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import VideoBackground from '@/components/VideoBackground.vue'
import StarTrail from '@/components/StarTrail.vue'

const latestPosts = ref([
  { id: 1, tag: 'Vue', title: 'Vue 3 组合式 API 最佳实践', excerpt: '深入理解响应式原理与组合式函数设计模式', date: '2026-06-20', readTime: '8 min' },
  { id: 2, tag: '设计', title: '极简主义在 UI 设计中的运用', excerpt: '如何用减法思维打造高级感界面', date: '2026-06-15', readTime: '6 min' },
  { id: 3, tag: '工程化', title: 'Vite 插件开发实战', excerpt: '从零构建一个高效的 Vite 插件', date: '2026-06-10', readTime: '10 min' },
])

const techStack = ref([
  'Vue 3', 'React', 'TypeScript', 'Node.js', 'Python', 'Go',
  'Tailwind', 'Vite', 'Webpack', 'Docker', 'GraphQL', 'PostgreSQL',
  'Redis', 'Nginx', 'Figma', 'Three.js', 'WebGL', 'Rust'
])

const getTechSize = (tech) => {
  const sizes = {
    'Vue 3': '1.6rem',
    'TypeScript': '1.5rem',
    'Node.js': '1.4rem',
    'React': '1.3rem',
    'Go': '1.2rem',
    'Python': '1.2rem',
  }
  return sizes[tech] || '1.1rem'
}
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
}

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 120px 24px 80px;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 30%, rgba(74, 158, 255, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse at 80% 80%, rgba(123, 108, 255, 0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 20% 70%, rgba(100, 216, 255, 0.03) 0%, transparent 50%);
  z-index: 1;
  pointer-events: none;
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
}
.hero-avatar {
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
}
.avatar-ring {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 3px;
  background: var(--gradient-glow);
  box-shadow: 0 0 60px rgba(74, 158, 255, 0.15);
  animation: avatarPulse 4s ease-in-out infinite;
}
.avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.avatar-emoji {
  font-size: 44px;
  line-height: 1;
}

@keyframes avatarPulse {
  0%, 100% { box-shadow: 0 0 40px rgba(74, 158, 255, 0.12); }
  50% { box-shadow: 0 0 80px rgba(74, 158, 255, 0.25); }
}

.hero-title {
  font-size: clamp(2.6rem, 7vw, 4.8rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
  letter-spacing: -1.5px;
}
.hero-greeting {
  display: block;
  font-size: 0.4em;
  font-weight: 400;
  color: var(--text-secondary);
  letter-spacing: 2px;
  margin-bottom: 6px;
}
.hero-name {
  font-family: var(--font-code);
  font-weight: 600;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.hero-desc {
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  color: var(--text-muted);
  max-width: 540px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  padding: 12px 36px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 15px;
  background: var(--gradient-glow);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all var(--transition-smooth);
  box-shadow: 0 4px 30px rgba(74, 158, 255, 0.2);
  font-family: var(--font-sans);
  letter-spacing: 0.5px;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 48px rgba(74, 158, 255, 0.3);
  color: #fff;
}
.btn-ghost {
  padding: 12px 36px;
  border-radius: 40px;
  font-weight: 500;
  font-size: 15px;
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid rgba(100, 216, 255, 0.15);
  cursor: pointer;
  transition: all var(--transition-smooth);
  font-family: var(--font-sans);
  letter-spacing: 0.5px;
}
.btn-ghost:hover {
  border-color: var(--accent-cyan);
  color: #fff;
  background: rgba(100, 216, 255, 0.05);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  opacity: 0.5;
  animation: bounceDown 2.4s ease-in-out infinite;
}
.scroll-line {
  display: block;
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, var(--accent-cyan), transparent);
}
.scroll-label {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
}
@keyframes bounceDown {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

/* 快捷入口 */
.quick-entry {
  margin-top: -40px;
  position: relative;
  z-index: 3;
  padding: 0 24px;
}
.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
}
.quick-card {
  padding: 28px 22px;
  text-align: center;
  transition: all var(--transition-smooth);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
}
.quick-card:hover {
  color: var(--text-primary);
}
.quick-icon {
  font-size: 28px;
}
.quick-card h3 {
  font-size: 16px;
  font-weight: 600;
}
.quick-card p {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0;
}

/* 通用section */
.section {
  padding: 60px 0 20px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 12px;
}
.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 600;
  letter-spacing: -0.5px;
}
.section-more {
  font-size: 14px;
  color: var(--text-muted);
  transition: color var(--transition-smooth);
}
.section-more:hover {
  color: var(--accent-cyan);
}

/* 博客预览 */
.blog-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.blog-card {
  padding: 26px 24px;
  transition: all var(--transition-smooth);
}
.blog-card a {
  color: inherit;
  display: block;
}
.blog-card-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-cyan);
  background: rgba(100, 216, 255, 0.08);
  padding: 2px 14px;
  border-radius: 20px;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.blog-card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.3;
}
.blog-card-excerpt {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 14px;
}
.blog-card-meta {
  font-size: 12px;
  color: var(--text-muted);
  display: flex;
  gap: 12px;
}

/* 技术云 */
.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  justify-content: center;
  padding: 20px 0;
}
.tech-tag {
  font-family: var(--font-code);
  color: var(--text-secondary);
  opacity: 0.7;
  transition: all var(--transition-smooth);
  cursor: default;
  font-weight: 500;
}
.tech-tag:hover {
  opacity: 1;
  color: var(--accent-cyan);
  transform: scale(1.05);
}

.hide-mobile {
  display: inline;
}
@media (max-width: 640px) {
  .hide-mobile {
    display: none;
  }
  .quick-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .blog-preview-grid {
    grid-template-columns: 1fr;
  }
  .hero {
    padding: 80px 16px 56px;
  }
  .avatar-ring {
    width: 72px;
    height: 72px;
  }
  .avatar-emoji {
    font-size: 32px;
  }
  .hero-title {
    font-size: clamp(1.8rem, 8vw, 3.2rem);
  }
  .hero-desc {
    font-size: 0.98rem;
    max-width: 90%;
  }
}
</style>