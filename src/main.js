import Vue from "vue";
import App from "./App.vue";

import "./assets/main.scss";

import './assets/scroll'
import './assets/main'


import './assets/lang/index'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");


