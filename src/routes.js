import Admin from './components/Admin/Main.vue'
import Site from './components/Site/Main.vue'

export const routes = [
	{ path: '/', component: Site},
	{ path: '/admin', component: Admin}	
]