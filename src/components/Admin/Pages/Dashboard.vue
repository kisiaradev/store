<template>
<div>
	<admin-header></admin-header>
	<admin-table :user="user"></admin-table>	
</div>
</template>

<script>
import AdminHeader from '../Shared/Header.vue'
import AdminFooter from '../Shared/Footer.vue'
import AdminStore from './Store.vue';

const api_user = 'https://store-ed6a8.firebaseio.com/user/data.json';

export default{
	data(){
		return {
		    user: null
		};
	},

	mounted(){
		this.setUser();
	},

	methods: {
		setUser(){
			this.$http.get(api_user)
				.then(
					response => {
						this.user = response.data;
					}
				)
		}
	},

	components: {
		'admin-header': AdminHeader,
		'admin-footer': AdminFooter,
		'admin-table': AdminStore
	}

	
}	
</script>

<style lang="scss">
	
</style>