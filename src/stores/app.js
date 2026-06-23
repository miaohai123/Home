// src/stores/app.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const isMenuOpen = ref(false);
  const theme = ref("dark");

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  const closeMenu = () => {
    isMenuOpen.value = false;
  };

  return { isMenuOpen, theme, toggleMenu, closeMenu };
});
