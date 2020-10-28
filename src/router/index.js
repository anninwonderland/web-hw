import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "@/components/About";
import Articles from "@/components/Articles";
import Search from "@/components/films/Search";
import List from "@/components/films/List";
import Random from "@/components/films/Random";
import Producers from "@/components/Producers";
import Contacts from "@/components/Contacts";
import Calc from "@/components/other/Calc";
import Test from "@/components/other/Test";

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
        path: "/films/random",
        name: "FilmsRandom",
        component: Random
      },
      {
        path: "/producers",
        name: "Producers",
        component: Producers
      },
      {
        path: "/other/calc",
        name: "Calc",
        component: Calc
      },
      {
        path: "/other/test",
        name: "Test",
        component: Test
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
