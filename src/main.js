import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Layout from './components/layout/Layout.vue'
import Carousel3d from 'vue-carousel-3d';


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Carousel3d);


const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(Layout),
  router: router
}).$mount('#app')
