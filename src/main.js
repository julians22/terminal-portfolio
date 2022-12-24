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

const google_measurement = import.meta.env.VITE_GOOGLE_MEASURMENT;

console.log(google_measurement);

app.use(VueGtag, {
    property: {
        id: google_measurement
    }
})

app.mount("#app");
