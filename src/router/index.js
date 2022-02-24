import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/main/home",
  },
  {
    path: "/main",
    name: "layout",
    component: () => import(/** layout */ "@/layout/layout.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/** home */ "@/pages/home/home.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import(/** about */ "@/pages/about/about.vue"),
      },
      {
        path: "other",
        name: "other",
        component: () => import(/** other */ "@/pages/other/other.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import(/** 404 */ "@/pages/error/404.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.matched && to.matched.length > 0) {
    next();
  } else {
    next("404");
  }
});

export default router;
