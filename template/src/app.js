import Vue from 'vue';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';

import Application from './Application';
import store from './store';
import Home from './pages/Home';
import About from './pages/About';
import Wildcard from './pages/Wildcard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/about',
      name: 'about',
      component: About,
    }, {
      path: '*',
      name: 'wildcard',
      component: Wildcard,
    },
  ],
});

// sync the router with the Vuex store.
// essentially creates store.state.route
sync(store, router);

/* eslint-disable no-new */
const application = new Vue({
  router,
  store,
  ...Application,
});

export { application, router, store };