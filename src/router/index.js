import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "@/components/About";
import Articles from "@/components/Articles";
import Search from "@/components/films/Search";
import List from "@/components/films/List";

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
      {
        path: "/films/search",
        name: "FilmsSearch",
        component: Search
      },
      {
        path: "/films/list",
        name: "FilmsList",
        component: List
      },
      {
        path: "/films/recommendations",
        name: "FilmsRecommendations",
        component: Articles
      },
      {
        path: "/producers",
        name: "Producers",
        component: Articles
      },
      {
        path: "/contacts",
        name: "Contacts",
        component: Articles
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
