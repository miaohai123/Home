// src/App.vue
<template>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
// 全局根组件
</script>

<style>
#app {
  min-height: 100vh;
  background: var(--bg-primary);
}
</style>