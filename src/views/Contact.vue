// src/views/Contact.vue
<template>
  <div class="page-contact">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px; max-width: 720px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 6px;">联系留言</h1>
      <p style="color: var(--text-muted); margin-bottom: 32px;">有想法或合作？随时给我留言 ✦</p>

      <form @submit.prevent="handleSubmit" class="contact-form glass" style="padding: 36px 32px;">
        <div class="form-group">
          <label>姓名</label>
          <input v-model="form.name" type="text" required placeholder="你的名字" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input v-model="form.email" type="email" required placeholder="your@email.com" />
        </div>
        <div class="form-group">
          <label>主题</label>
          <input v-model="form.subject" type="text" placeholder="想聊些什么？" />
        </div>
        <div class="form-group">
          <label>消息</label>
          <textarea v-model="form.message" rows="5" required placeholder="写下你的想法..."></textarea>
        </div>
        <button type="submit" class="btn-primary" style="width: 100%; padding: 14px; font-size: 16px;">
          {{ submitting ? '发送中...' : '发送消息 ✦' }}
        </button>
        <p v-if="submitted" style="margin-top: 16px; color: var(--accent-cyan); text-align: center; font-size: 14px;">
          ✅ 消息已发送，感谢你的留言！
        </p>
      </form>

      <div style="margin-top: 32px; display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; color: var(--text-muted); font-size: 14px;">
        <a href="mailto:dev@example.com" style="color: inherit;">📧 dev@example.com</a>
        <a href="#" style="color: inherit;">🐙 GitHub</a>
        <a href="#" style="color: inherit;">🐦 Twitter</a>
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

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
    setTimeout(() => { submitted.value = false }, 5000)
  }, 1200)
}
</script>

<style scoped>
.contact-form {
  background: var(--bg-glass);
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 6px;
  letter-spacing: 0.3px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(100,216,255,0.06);
  background: rgba(0,0,0,0.2);
  color: var(--text-primary);
  font-size: 14px;
  font-family: var(--font-sans);
  transition: border-color var(--transition-smooth);
  outline: none;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 20px rgba(74,158,255,0.05);
}
.form-group textarea {
  resize: vertical;
  min-height: 100px;
}
</style>