import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import { fb } from './firebase'

// Notifications
import VueNoty from 'vuejs-noty'
Vue.use(VueNoty)

// Vue firestore
import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore)


// Carousels
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

// Global Components Setup

Vue.component('Nav', require('./components/Nav.vue').default);

Vue.config.productionTip = false

let app = ''
// eslint-disable-next-line no-unused-vars
fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


