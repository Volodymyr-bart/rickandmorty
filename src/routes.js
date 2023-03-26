import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PersonPage from "./pages/PersonPage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/person/:id", component: PersonPage, name: "person" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
