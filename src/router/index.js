import { trackRouter } from "vue-gtag-next";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DailyItemView from "../views/DailyItemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: 'Home | Julian Portfolio'
      }
    },
    {
      path: "/daily-items",
      name: "daily-items",
      component: DailyItemView,
      meta: {
        title: "Daily Items | Julian's Page"
      }
    }
  ],
});

trackRouter(router, {
  useScreenview: true
})

export default router;
