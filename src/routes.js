import Admin from './components/Admin/Main.vue'
import Dashboard from './components/Admin/Pages/Dashboard.vue'
import Site from './components/Site/Main.vue'

export const routes = [
	{ path: '/', component: Site},
	{ path: '/admin', component: Admin},
	{
		path: '/dashboard',
		component: Dashboard,
		children:[
			// {path: '/logout'}
		]  
	}
]