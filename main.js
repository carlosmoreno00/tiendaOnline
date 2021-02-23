import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Notifications from 'vue-notification'
Vue.use(Notifications)

Vue.config.productionTip = false

import principal from './components/principal.vue'
Vue.component(principal)
import carrito from './components/carrito.vue'
Vue.component(carrito)
const routes = [
  { path: '/', component: principal },
  { path: '/principal', component: principal },
  { path: '/carrito', component: carrito, meta: {requieresAuth: true} },
]
const router = new VueRouter({
  routes
});
import Firebase from './db.js'
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Firebase.auth.currentUser) {
      next('/')
    } else {
      next('/carrito')
    }
  } else {
    next() 
  }
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
