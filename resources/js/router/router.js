import VueRouter from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/login.vue"),
    meta: {
      auth: undefined,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../pages/dashboard.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/mijnWeddenschappen",
    name: "mijnWeddenschappen",
    component: () => import("../pages/mijnWeddenschappen.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/addWedstrijd",
    name: "addWedstrijd",
    component: () => import("../pages/addWedstrijd.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/adminPage",
    name: "adminPage",
    component: () => import("../pages/adminPage.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../pages/logout.vue"),
    meta: {
      auth: true,
    },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
