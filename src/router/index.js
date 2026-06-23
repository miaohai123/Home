// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/blog",
    name: "BlogList",
    component: () => import("@/views/BlogList.vue"),
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: () => import("@/views/BlogDetail.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("@/views/Resume.vue"),
  },
  {
    path: "/tools",
    name: "Tools",
    component: () => import("@/views/Tools.vue"),
  },
  {
    path: "/archive",
    name: "BlogArchive",
    component: () => import("@/views/BlogArchive.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () => import("@/views/Friends.vue"),
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () => import("@/views/Timeline.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("@/views/Resources.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

export default router;
