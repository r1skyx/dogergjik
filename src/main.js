import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
import "./index.css";
import Vue3TouchEvents from "vue3-touch-events";
import router from "./router/index";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.use(Vue3TouchEvents);
app.mount("#app");
