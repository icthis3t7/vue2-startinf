import Router from 'vue-router';
import Vue from 'vue';

import champion from '@/routes/champion';
import missing from '@/routes/missing'
import home from '@/routes/home';


Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: home

    },

    {
      path: '/champion/:name',
      name: 'champion',
      component: champion

    },

    {
      path: '*',
      component: missing

    }

  ]

});
