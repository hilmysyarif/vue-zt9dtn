const { createApp } = require("vue");
import App from "./App.vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import App from "./components/App.vue";
import VueSweetalert2 from "vue-sweetalert2";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import DataTable from "laravel-vue-datatable";
Vue.use(DataTable);
Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.component(VueQrcode.name, VueQrcode);

import BetIndex from "./components/BetIndex.vue";

const routes = [
  {
    name: "/",
    path: "/",
    component: BetIndex
  }
];

const router = new VueRouter({ mode: "history", routes: routes });
createApp(App).mount("#app");
