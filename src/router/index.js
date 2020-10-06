/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/page1",
    name: "FirstPage",
    component: () => import("../views/FirstPage.vue"),
  },
  {
    path: "/page2",
    name: "SecondPage",
    component: () => import("../views/SecondPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
