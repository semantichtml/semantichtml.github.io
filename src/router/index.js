import { createRouter, createWebHistory } from "vue-router";
import WebsiteInformation from "../components/WebsiteInformation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/developer",
      name: "developer",
      component: WebsiteInformation,
    },
  ],
});

export default router;
