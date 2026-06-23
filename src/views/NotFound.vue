// src/views/NotFound.vue
<template>
  <div class="page-404">
    <AppHeader />
    <StarTrail />
    <main class="container" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding-top: 80px;">
      <div style="text-align: center; max-width: 500px;">
        <div style="font-size: 100px; line-height: 1.2; margin-bottom: 8px;">🧑‍💻</div>
        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 4px;">404</h1>
        <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 8px;">页面迷失在代码森林里了</p>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 28px;">
          可能它被重构掉了，或者你输入了一个不存在的路径
        </p>
        <router-link to="/" class="btn-primary">回到首页</router-link>
        <div style="margin-top: 20px;">
          <span style="color: var(--text-muted); font-size: 13px; font-family: var(--font-code);">
            &lt;Error /&gt; · 404 Not Found
          </span>
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
</script>