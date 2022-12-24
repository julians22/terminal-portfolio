import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueGtag from "vue-gtag-next";

import "./assets/main.css";
import "./assets/fonts/Fira Code/stylesheet.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueGtag, {
    property: {
        id: "G-FSNV6HW00B"
    }
})

app.mount("#app");
