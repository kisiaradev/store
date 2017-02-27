<template>
<div>
	<admin-header :user="user"></admin-header>

</div>
</template>

<script>
import AdminHeader from '../Shared/Header.vue'
import AdminFooter from '../Shared/Footer.vue'

const api_user = 'https://store-ed6a8.firebaseio.com/user/data.json';

export default{
	data: function(){
		return {
		    user: null
		};
	},

	mounted: function(){
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
		'admin-footer': AdminFooter
	}

	
}	
</script>

<style lang="scss">
	
</style>