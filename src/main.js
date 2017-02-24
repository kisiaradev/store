//Imports
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';
import App from './App.vue'
import { routes } from './routes.js'

//Register the resource
Vue.use(VueResource);
Vue.http.options.root = 'https://store-ed6a8.firebaseio.com/data.json';


//Register the Router
Vue.use(Router);

const router = new Router({
	routes: routes,
	mode: 'history'
});



var vm = new Vue({
  	el: '#app',
  	router: router,
  	render: h => h(App)
})
