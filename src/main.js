import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';
import '../node_modules/material-icons/iconfont/material-icons.scss'

Vue.config.productionTip = false
Vue.use(Toasted);

new Vue({
  render: h => h(App),
}).$mount('#app')
