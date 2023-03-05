import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import Vue3TouchEvents from "vue3-touch-events";

import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Vue3TouchEvents);
app.mount("#app");
