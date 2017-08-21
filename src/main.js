import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';

import App from './App.vue';
import Single from './Single.vue';

Vue.use(VueResource);
Vue.use(Router);

const router = new Router({
	routes: [
		{path: '/', component: App},
		{path: '/post/:id', name: 'post', component: Single}
	]
})

new Vue({
  el: '#app',
  router: router

})
