<template>
	<div id="container">
		<div class="dark-cover">
			<admin-login></admin-login>
		</div>
	</div>
</template>

<script>
import LoginForm from './Pages/LoginForm.vue'

export default{
	data: function(){
		return {

		};
	},

	components: {
		'admin-login':  LoginForm
	}
}
</script>

<style lang="scss" scoped>
#container{
	width: 100%;
	height: 703px;
	padding: 0px;
	margin: 0px;
	background: url(../../assets/images/admin-bg.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.dark-cover{
	width: 100%;
	height: 100%;

    background: -webkit-linear-gradient(-45deg,rgba(255,0,0,0),rgba(22, 160, 133,1.0)); /*Safari 5.1-6*/
    background: -o-linear-gradient(right,rgba(255,0,0,0),rgba(22, 160, 133,1.0)); /*Opera 11.1-12*/
    background: -moz-linear-gradient(right,rgba(255,0,0,0),rgba(22, 160, 133,1.0)); /*Fx 3.6-15*/
    background: linear-gradient(to -45deg, rgba(255,0,0,0), rgba(22, 160, 133,1.0));
	

}
</style>