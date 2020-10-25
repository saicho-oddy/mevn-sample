import Vue from "vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

require("./assets/stylus/main.styl");
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap-vue/dist/bootstrap-vue.css");

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
