import Vue from "vue";
import App from "./App.vue";

import "./assets/main.scss";

import './assets/full-page-scroll'
import '@/assets/full-page-scroll.css'
import './assets/main'

import './lang/index'
import store from "./store";

import Notifications from 'vue-notification'
import Loader from './components/common/Loader'

Vue.use(Notifications);

Vue.component('loader', Loader)

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");


