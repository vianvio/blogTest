import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/',
      redirect: '/welcome'
    }
  ]
})