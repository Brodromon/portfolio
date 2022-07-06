import Vue from "vue";
import App from "./App.vue";

import "./assets/main.scss";

import './assets/scroll'
import './assets/main'

// import Vue100vh from 'vue-div-100vh'

import './assets/lang/index'

Vue.config.productionTip = false;

// Vue.component(Vue100vh)

new Vue({
  render: (h) => h(App),
}).$mount("#app");


