import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './style/element_ui.scss'
import './style/theme/index.css'
import ElementUI from 'element-ui';

import './assets/fonts.css';
import './assets/main.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
