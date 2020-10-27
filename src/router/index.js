import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "@/components/About";
import Articles from "@/components/Articles";
import Search from "@/components/films/Search";
import List from "@/components/films/List";
import Producers from "@/components/Producers";
import Contacts from "@/components/Contacts";

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
        component: Producers
      },
      {
        path: "/contacts",
        name: "Contacts",
        component: Contacts
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
