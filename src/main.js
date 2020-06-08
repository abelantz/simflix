import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Layout from './components/layout/Layout.vue'
import Carousel3d from 'vue-carousel-3d';
import Vuex from 'vuex';
import axios from "axios";
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Carousel3d);
Vue.use(Vuex);


const router = new VueRouter({
  routes,
  mode:'history'
})

const store = new Vuex.Store({
  state: {
      videos:[],
  },
  mutations: {
      getVideos(state, payload){
          state.videos = payload
      }
  },
  actions: {
      getVideos({commit}){
          axios.get('http://hybridtv.ss7.tv/techtest/movies.json')
              .then((response) => {
                  commit('getVideos', response.data.data)
                  return response;
              })
      }
  }
})

store.dispatch('getVideos');



new Vue({
  render: h => h(Layout),
  router: router,
  store: store
}).$mount('#app')
