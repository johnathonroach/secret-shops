//import Backendless from "backendless";
import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
//import store from "../store";
import Backendless from "@/plugins/backendless.js";

const routes = [
  /*{
    path: "/",
    name: "Home",
    component: Home,
  },*/
  {
    path: "/",
    name: "login",
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
    path: "/inboxes",
    name: "inboxes",
    meta: {
      auth: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Inboxes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/*router.beforeEach((to, from, next) => {
  //console.log("global beforeEach");
  const requiresAuth = to.matched.some((record) => record.meta.auth);

  Backendless.UserService.getCurrentUser().then((user) => {
    if (!user) {
      next("/");
    } else if (requiresAuth && to.path !== "/" && user["role"] === "dmp") {
        next("/dmp");
     
    } else if (requiresAuth && to.path !== "/" && user["role"] === "management") {
        next("/management");

    } else if (requiresAuth && to.path !== "/" && user["role"] === "admin") {
        next("/admin");
    } else {
        next();
    }
  });
});*/

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);
  //console.log("global beforeEach");
  //const currentUser = Backendless.UserService.getCurrentUser();
  //console.log(currentUser["role"]);

  Backendless.UserService.getCurrentUser().then((user) => {
    if (requiresAuth && !user) {
      next("/");
      console.log("hello");
    } else {
      next();
      console.log("around");
    }

    /*if (user && user["role"] === "dmp") {
      next("/dmp");
      console.log(user["role"]);
    
    }*/
  });
  // end backendless
});
// end router guard

export default router;
