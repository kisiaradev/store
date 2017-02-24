<template>
	<div id="admin-form">
		<form >
		  	<div class="row">
		  		<header>
		  			<p class="dafoe">
						Cytonn Bike Store 
					</p>
		  			<div class="row">
		  				<div class="admin-links columns medium-6 active">SIGN IN</div>
		  				<div class="admin-links columns medium-6">REGISTER</div>
		  			</div>
		  		</header>
		  		


		  		<div id="login-form">
		  			<div class="row">
					    <div class="medium-12 columns">
					      	<label><span class="labels">USERNAME</span>
					        	<input v-model="user.username" type="text">
					      	</label>
					    </div>

					    <div class="medium-12 columns">
					      	<label><span class="labels">PASSWORD</span>
					        	<input v-model="user.password" type="text">
					      	</label>
					    </div>

						<div class="medium-12 columns send-button">
							<label>
					        	<button @click="submit" type="button" class="success button medium-12 columns">Register</button>
					      	</label>
					    	
					    </div>
					</div>
		  		</div>
		  		 
		  	</div>
		</form>
	</div>
</template>

<script>
export default{
	data: function(){
    		return {
    			user: {
    			username: '',
    			password: ''
    		}
    	}
    },

	methods: {
		submit(){
			this.$http.post('', this.user)
				.then(
					response => {
						console.log(response);
					}, 
					error => {
						console.log("*** Errors ***")
						console.log(error);
					}
				);
		}
	}	
}
</script>


<style lang="scss" scoped>
#admin-form{
	padding-top: 80px;
	form{
		height: 550px;
		width: 450px;
		background-color: rgba(44, 62, 80, 0.2);
		background-color: rgba(44, 62, 80, 0.7);
		background-color: rgba(44, 62, 80, 0.5);
		margin: 0px auto;
		border-radius: 10px;
		box-shadow: -1px 1px 8px #151515;
	}

	header{
		.admin-links{
			color: #fff;
			text-align: center;	
			font-size: 14px;
			font-weight: bold;
			margin-bottom: 20px;
		}

		.active{
			color: #16a085;
			color: #2ecc71;
		}
	}
}

.dafoe{
	font-size: 40px;
	text-align: center;
	width: 100%;
	margin: 30px 0px;
	color: #fff;
	padding: 0px;
	text-shadow: 1px 1px #424242;

}

#login-form{
	padding: 20px;
	font-family: 'Roboto', sans-serif;

	label{
		font-size: 10px;
		color: #ddd;
		font-weight: 900;
	}	

	.send-button{
		margin-top: 20px;
	}

	input{
		color: #777;
		font-family: 'Open Sans';
		font-weight: 300;
		font-size: 12px;
		padding-left: 15px;
	}

	input, button{
		border-radius: 20px;
	}

	.labels{
		display: inline-block;
		margin-left: 15px;
	}
	
}
</style>	