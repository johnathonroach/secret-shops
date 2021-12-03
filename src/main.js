import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Backendless from "backendless";
import "./assets/scss/main.scss";

createApp(App).use(store).use(router).use(Backendless).mount("#app");
