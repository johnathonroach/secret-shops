import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BalmUI from "balm-ui"; // Official Google Material Components
import BalmUIPlus from "balm-ui-plus"; // BalmJS Team Material Components
import "balm-ui-css";

import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}
import Backendless from "backendless";
import "./assets/scss/main.scss";


//createApp(App).use(store).use(router).use(VuesticPlugin).use(Backendless).mount("#app");
createApp(App)
  .use(store)
  .use(router)
  .use(BalmUI)
  .use(BalmUIPlus)
  //  .use(require('vue-faker'))
  .use(Backendless)
  .mount("#app");
