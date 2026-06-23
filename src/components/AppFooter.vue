// src/components/AppFooter.vue
<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-text">
        © {{ new Date().getFullYear() }} DevPort · 用代码构筑数字美学
      </p>
      <div class="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
        <a href="mailto:dev@example.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 40px 0 32px;
  border-top: 1px solid rgba(100, 216, 255, 0.05);
  margin-top: 60px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-text {
  font-size: 13px;
  color: var(--text-muted);
  letter-spacing: 0.3px;
}
.footer-links {
  display: flex;
  gap: 20px;
}
.footer-links a {
  font-size: 13px;
  color: var(--text-muted);
  transition: color var(--transition-smooth);
}
.footer-links a:hover {
  color: var(--accent-cyan);
}
@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>