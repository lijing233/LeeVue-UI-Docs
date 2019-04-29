import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import DemoBlock from './components/demo-block.vue'
import "highlight.js/styles/color-brewer.css";
import registPackage from './packages/index.js'

Vue.config.productionTip = false
Vue.use(registPackage)
Vue.component("demo-block", DemoBlock);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
