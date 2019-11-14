import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';
import '../node_modules/material-icons/iconfont/material-icons.scss'
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(Toasted);

new Vue({
  render: h => h(App),
}).$mount('#app')
