import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/Admin/Dashboard",
    name: "Admin/Dashboard",
    component: () => import("../views/Dashboard/Dashboard.vue")
  },
  {
    path: "/Admin/User/Create",
    name: "Admin/User/Create",
    component: () => import("../views/User/CreateUser.vue")
  },
  {
    path: "/Admin/User/Manage",
    name: "Admin/User/Manage",
    component: () => import("../views/User/ManageUser.vue")
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
