import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import './style/element_ui.scss'
import './style/theme/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import ElementUI from 'element-ui'

import './assets/fonts.css'
import './assets/main.scss'

import VueMindmap from 'vue-mindmap'
import 'vue-mindmap/dist/vue-mindmap.css'

import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueMindmap)
Highcharts.setOptions({
  lang: {
    resetZoom: 'Вернуть'
  }
})


Vue.use(HighchartsVue, {
  highcharts: Highcharts
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
