import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
import Backendless from "@/plugins/backendless.js";

const routes = [
  /*{
    path: "/",
    name: "Home",
    component: Home,
  },*/
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Login",
    meta: {
      guest: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    meta: {
      auth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
  },
  {
    path: "/account-executive",
    name: "account-executive",
    meta: {
      auth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AccountExecutive.vue"),
  },
];

// Guard routes based on authentification
router.beforeEach((to, from, next) => {
  Backendless.UserService.getCurrentUser().then((user) => {
    if (user) {
      console.log(user);

      if (user["role"] === "dealership") {
        if (to.path !== "/dealership")
          return next({
            path: "/dealership",
            meta: {
              auth: true,
            },
          });
      } else if (user["role"] === "admin") {
        if (to.path !== "/admin")
          return next({
            path: "/admin",
            meta: {
              auth: true,
            },
          });
      } else if (user["role"] === "ae") {
        if (to.path !== "/account-executive")
          return next({
            path: "/account-executive",
            meta: {
              auth: true,
            },
          });
      }
    } else {
      if (to.matched.some((record) => record.meta.auth)) {
        next({
          path: "/",
          query: {
            redirect: to.fullPath,
          },
        });
      } else {
        next();
      }
    }
  });
  next();
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
