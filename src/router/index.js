import Vue from 'vue';
import Router from 'vue-router';
import hello from '@/routes/home';
import champion from '@/routes/champion'

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello

    },

    {
      path: '/champion',
      name: 'champion',
      component: champion
      
    }

  ]

});
