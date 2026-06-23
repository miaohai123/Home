import{o as m,c as s,f as n,g as e,t as a,i as p,u as g,r as x,k as f,b as i,l as d}from"./index-CphMaURc.js";import{_,A as v,S as h,a as y}from"./StarTrail-C8SyB8MX.js";const b={class:"page-blog-detail"},w={class:"container",style:{"padding-top":"100px","padding-bottom":"60px","max-width":"820px"}},V={key:0,class:"detail-card glass",style:{padding:"40px 36px"}},T={style:{display:"flex",gap:"12px","align-items":"center","flex-wrap":"wrap","margin-bottom":"12px"}},k={class:"post-tag"},A={style:{"font-size":"13px",color:"var(--text-muted)"}},B={style:{"font-size":"2.2rem","font-weight":"700","line-height":"1.2","margin-bottom":"16px"}},C={style:{color:"var(--text-secondary)","font-size":"14px","margin-bottom":"28px",display:"flex",gap:"20px","flex-wrap":"wrap"}},P=["innerHTML"],z={style:{"margin-top":"32px","padding-top":"24px","border-top":"1px solid rgba(100,216,255,0.06)"}},D={key:1,style:{"text-align":"center",padding:"60px 0"}},I={__name:"BlogDetail",setup(N){const c=g(),t=x(null),u={1:{id:1,tag:"Vue",title:"Vue 3 组合式 API 最佳实践",date:"2026-06-20",readTime:"8 min",views:342,content:`
      <h2>响应式原理</h2>
      <p>Vue 3 的响应式系统基于 <code>Proxy</code> 实现，相比 Vue 2 的 <code>Object.defineProperty</code> 具有更好的性能和更完整的响应式覆盖。</p>
      <pre><code>import { ref, reactive, computed, watch } from 'vue'

const count = ref(0)
const state = reactive({ name: 'Vue' })
const double = computed(() => count.value * 2)

watch(count, (newVal) => {
  console.log('count changed:', newVal)
})</code></pre>
      <h3>组合式函数</h3>
      <p>通过组合式函数（Composables）实现逻辑复用，让代码更加清晰和可维护。</p>
      <pre><code>// useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  const double = computed(() => count.value * 2)
  const increment = () => count.value++
  return { count, double, increment }
}</code></pre>
    `},2:{id:2,tag:"设计",title:"极简主义在 UI 设计中的运用",date:"2026-06-15",readTime:"6 min",views:215,content:`
      <h2>减法设计思维</h2>
      <p>极简主义不是简单，而是经过深思熟虑后的精炼。每个元素都应有其存在的理由。</p>
      <h3>留白的艺术</h3>
      <p>充足的留白能让内容呼吸，提升阅读体验与视觉层次感。</p>
      <h3>色彩与排版</h3>
      <p>克制地使用色彩，选择高质量字体，让内容成为视觉的中心。</p>
    `},3:{id:3,tag:"工程化",title:"Vite 插件开发实战",date:"2026-06-10",readTime:"10 min",views:189,content:`
      <h2>Vite 插件机制</h2>
      <p>Vite 提供了丰富的插件 API，让开发者可以轻松扩展构建流程。</p>
      <pre><code>// my-plugin.js
export default function myPlugin() {
  return {
    name: 'my-plugin',
    transform(code, id) {
      if (id.endsWith('.custom')) {
        return { code: 'export default ' + JSON.stringify(code) }
      }
    }
  }
}</code></pre>
      <h3>实战：自定义文件处理</h3>
      <p>通过插件处理特殊文件格式，实现个性化构建需求。</p>
    `}};return m(()=>{const r=c.params.id;t.value=u[r]||null}),(r,o)=>{const l=f("router-link");return i(),s("div",b,[n(v),n(h),e("main",w,[t.value?(i(),s("article",V,[e("div",T,[e("span",k,a(t.value.tag),1),e("span",A,a(t.value.date),1)]),e("h1",B,a(t.value.title),1),e("div",C,[e("span",null,"📖 "+a(t.value.readTime),1),e("span",null,"👁 "+a(t.value.views)+" 浏览",1)]),e("div",{class:"blog-content",innerHTML:t.value.content},null,8,P),e("div",z,[n(l,{to:"/blog",style:{color:"var(--text-muted)","font-size":"14px"}},{default:p(()=>[...o[0]||(o[0]=[d("← 返回博客列表",-1)])]),_:1})])])):(i(),s("div",D,[o[2]||(o[2]=e("p",{style:{color:"var(--text-muted)"}},"文章不存在或已被删除",-1)),n(l,{to:"/blog",style:{color:"var(--accent-cyan)"}},{default:p(()=>[...o[1]||(o[1]=[d("返回博客",-1)])]),_:1})]))]),n(y)])}}},H=_(I,[["__scopeId","data-v-9688ff29"]]);export{H as default};
