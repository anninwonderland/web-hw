import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "@/components/About";
import Articles from "@/components/Articles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/articles",
    children: [
      {
        path: "/about",
        name: "About",
        component: About
      },
      {
        path: "/articles",
        name: "Articles",
        component: Articles
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
