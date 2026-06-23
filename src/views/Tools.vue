// src/views/Tools.vue
<template>
  <div class="page-tools">
    <AppHeader />
    <StarTrail />
    <main class="container" style="padding-top: 100px; padding-bottom: 60px;">
      <h1 class="glow-text" style="font-size: 2.4rem; margin-bottom: 6px;">前端工具集</h1>
      <p style="color: var(--text-muted); margin-bottom: 32px;">日常开发中常用的小工具，提升效率 ✦</p>

      <div class="tools-grid">
        <div v-for="tool in tools" :key="tool.name" class="tool-card glass card-hover">
          <div class="tool-icon">{{ tool.icon }}</div>
          <h3>{{ tool.name }}</h3>
          <p>{{ tool.desc }}</p>
          <button class="tool-btn" @click="useTool(tool)">使用 →</button>
        </div>
      </div>

      <!-- 弹窗 -->
      <div v-if="activeTool" class="tool-modal" @click.self="activeTool = null">
        <div class="tool-modal-content glass">
          <button class="modal-close" @click="activeTool = null">✕</button>
          <h2>{{ activeTool.name }}</h2>
          <p style="color: var(--text-secondary); margin-bottom: 16px;">{{ activeTool.desc }}</p>
          <div v-html="activeTool.content"></div>
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

const activeTool = ref(null)

const tools = ref([
  { name: '时间戳转换', icon: '⏱', desc: 'Unix 时间戳与日期字符串互转', content: `<div style="display:flex;gap:12px;flex-wrap:wrap;"><input id="ts-input" type="text" placeholder="输入时间戳" style="flex:1;padding:10px 14px;border-radius:8px;border:1px solid rgba(100,216,255,0.08);background:rgba(0,0,0,0.2);color:#fff;"/><button onclick="document.getElementById('ts-output').textContent=new Date(parseInt(document.getElementById('ts-input').value)*1000).toLocaleString()" style="padding:10px 20px;border-radius:8px;border:none;background:var(--gradient-glow);color:#fff;cursor:pointer;">转换</button></div><p id="ts-output" style="margin-top:12px;color:var(--text-secondary);font-size:14px;">等待输入...</p>` },
  { name: 'JSON 格式化', icon: '📋', desc: '格式化与校验 JSON 数据', content: `<textarea id="json-input" rows="4" placeholder="粘贴 JSON" style="width:100%;padding:12px;border-radius:8px;border:1px solid rgba(100,216,255,0.08);background:rgba(0,0,0,0.2);color:#fff;font-family:var(--font-code);font-size:13px;resize:vertical;"></textarea><button onclick="try{document.getElementById('json-output').textContent=JSON.stringify(JSON.parse(document.getElementById('json-input').value),null,2)}catch(e){document.getElementById('json-output').textContent='❌ 格式错误: '+e.message}" style="margin-top:10px;padding:8px 20px;border-radius:8px;border:none;background:var(--gradient-glow);color:#fff;cursor:pointer;">格式化</button><pre id="json-output" style="margin-top:12px;padding:12px;background:rgba(0,0,0,0.2);border-radius:8px;font-family:var(--font-code);font-size:13px;color:var(--text-secondary);overflow-x:auto;min-height:60px;"></pre>` },
  { name: '颜色工具', icon: '🎨', desc: '颜色格式转换与调色板', content: `<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;"><input id="color-input" type="color" value="#64d8ff" style="width:60px;height:60px;border:none;cursor:pointer;background:transparent;"/><span id="color-hex" style="font-family:var(--font-code);color:var(--text-secondary);">#64d8ff</span></div><div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap;"><button onclick="const c=document.getElementById('color-input').value;document.getElementById('color-hex').textContent=c;document.getElementById('color-rgb').textContent=hexToRgb(c)" style="padding:6px 16px;border-radius:6px;border:1px solid rgba(100,216,255,0.1);background:transparent;color:var(--text-secondary);cursor:pointer;">转换 RGB</button><span id="color-rgb" style="font-family:var(--font-code);color:var(--text-muted);font-size:13px;">rgb(100,216,255)</span></div><script>function hexToRgb(hex){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return 'rgb('+r+','+g+','+b+')'}<\/script>` },
  { name: '字符计数器', icon: '🔢', desc: '统计文本字符、单词与行数', content: `<textarea id="count-input" rows="4" placeholder="输入文本..." style="width:100%;padding:12px;border-radius:8px;border:1px solid rgba(100,216,255,0.08);background:rgba(0,0,0,0.2);color:#fff;font-size:14px;resize:vertical;"></textarea><div id="count-output" style="margin-top:12px;display:flex;gap:24px;flex-wrap:wrap;color:var(--text-secondary);font-size:14px;"><span>字符: <strong id="c-char" style="color:var(--text-primary);">0</strong></span><span>单词: <strong id="c-word" style="color:var(--text-primary);">0</strong></span><span>行数: <strong id="c-line" style="color:var(--text-primary);">0</strong></span></div><script>document.getElementById('count-input').addEventListener('input',function(){const v=this.value;document.getElementById('c-char').textContent=v.length;document.getElementById('c-word').textContent=v.trim()?v.trim().split(/\\s+/).length:0;document.getElementById('c-line').textContent=v.split('\\n').length})<\/script>` },
])

const useTool = (tool) => {
  activeTool.value = tool
  // 重新执行脚本（简化为重新挂载）
  setTimeout(() => {
    const scripts = document.querySelectorAll('.tool-modal-content script')
    scripts.forEach(s => {
      const newScript = document.createElement('script')
      newScript.textContent = s.textContent
      s.parentNode.replaceChild(newScript, s)
    })
  }, 50)
}
</script>

<style scoped>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
.tool-card {
  padding: 28px 22px;
  text-align: center;
  transition: all var(--transition-smooth);
  background: var(--bg-glass);
}
.tool-icon {
  font-size: 36px;
  margin-bottom: 10px;
}
.tool-card h3 {
  font-size: 16px;
  margin-bottom: 4px;
}
.tool-card p {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 16px;
  line-height: 1.5;
}
.tool-btn {
  padding: 6px 20px;
  border-radius: 20px;
  border: 1px solid rgba(100,216,255,0.1);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-smooth);
  font-size: 13px;
  font-family: var(--font-sans);
}
.tool-btn:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  background: rgba(100,216,255,0.04);
}

/* Modal */
.tool-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fadeIn 0.25s ease;
}
.tool-modal-content {
  max-width: 560px;
  width: 100%;
  padding: 32px 28px;
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid rgba(100,216,255,0.06);
  border-radius: var(--radius-lg);
  max-height: 80vh;
  overflow-y: auto;
}
.modal-close {
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 20px;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 8px;
  transition: background var(--transition-smooth);
}
.modal-close:hover {
  background: rgba(255,255,255,0.04);
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
</style>