import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from 'router'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')
