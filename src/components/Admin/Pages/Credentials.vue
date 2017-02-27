<!-- This template is shared by the login form and the registration form -->
<template>
	<div id="container">
		<div class="dark-cover">
			<div id="admin-form">
				<form>
					<div class="row">
				  		<header>
				  			<p class="dafoe">
								Cytonn Bike Store 
							</p>
				  			<div class="row">
				  				<a @click.prevent="loadRegisterForm" class="admin-links columns medium-6" >REGISTER</a>
				  				<a @click.prevent="loadLoginForm" class="admin-links columns medium-6" >SIGN IN</a>
				  			</div>
				  		</header>
						<div id="registration-form">
							<div class="row">
								<div v-show="register" class="medium-12 columns">
							      	<label><span class="labels">STORE NAME</span>
							        	<input v-model="user.store" type="text">
							      	</label>
							      	<p v-show="storeExists" class="help-text text-error float-right">store name already registered</p>
							    </div>

							    <div class="medium-12 columns">
							      	<label><span class="labels">USERNAME</span>
							        	<input v-model="user.username" type="text">
							      	</label>
							      	<p v-show="userExists" class="help-text text-error float-right">username has already been taken</p>
							    </div>

							    <div class="medium-12 columns">
							      	<label><span class="labels">PASSWORD</span>
							        	<input v-model="user.password" type="password">
							      	</label>
							    </div>

								<div class="medium-12 columns send-button">
									<label>
							        	<button type="button" class="success button medium-12 columns" v-show="register" @click="registerStore">Register</button>
							        	<button type="button" class="success button medium-12 columns" v-show="!register" @click="loginUser" >Login</button>
							      	</label>
								</div>
							</div>
						</div>
					</div> 
				</form>
			</div>
		</div>
	</div>
</template>

<script>

require('../../../assets/scripts/credentials.js');
const api_store = 'https://store-ed6a8.firebaseio.com/stores/data.json';

export default{
	data: function(){
    		return {
    			user: {
    				username: '',
    				password: '',
    				store: ''
    			},
    			register: true,
    			storeExists: false,
    			userExists: false, 
    	}
    },

    components: {
    	
    },

	methods: {
		registerStore(){
			
			if(this.user.username != '' && this.user.password != '' && this.user.store != ''){

				//Check if the username and store have already been registered
				this.getStores().then(
	    			data => {
	    				var submitDetails = this.checkAvailability(data);

	    				if(this.checkAvailability(data)){
							this.$http.post(api_store, this.user)
								.then(
									response => {
									
										//run login
										console.log(response);
									}, 
									error => {
										console.log("*** Errors ***")
										console.log(error);
									}
								);
	    					}	
	    				}
	    			);
			}else{

			}
		},
		adminLogin(){
			console.log("pressing login button");
		},
		loadRegisterForm(){
			this.register = true;
		},
		loadLoginForm(){
			this.register = false;
		},
		formatData(data){
			var formattedData = {
				usernames: [],
				stores: []
			}

			for(let key in data){
				formattedData.usernames.push(data[key].username);
				formattedData.stores.push(data[key].store);
    		}

    		return formattedData;
		},
		checkAvailability(data){
			var fdata = this.formatData(data);
			var canSubmit = true;

			//check if user exists
			if(fdata.usernames.indexOf(this.user.username) != -1){
				this.userExists = true,
				canSubmit = false;
			}

			if(fdata.stores.indexOf(this.user.store) != -1){
				this.storeExists = true,
				canSubmit = false;
			}

			return canSubmit;
		},
		getStores(){
			return 	this.$http.get(api_store)
    					.then(
    						response => {
    						return response.json();
    					}	
    				);
		},

		loginUser(){
			this.getStores().then(data => {
				console.log(data);
			});
		}
	}	
}
</script>


<style lang="scss">
#container{
	width: 100%;
	height: 100%;
	padding: 0px;
	margin: 0px;
	background: url(../../../assets/images/admin-bg.jpg) no-repeat center center fixed; 
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

#admin-form{
	padding-top: 45px;
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
			margin-bottom: 10px;
			cursor: pointer;
		}

		.active{
			color: #2ecc71;
		}
	}
}

.dafoe{
	font-size: 40px;
	text-align: center;
	width: 100%;
	margin: 20px 0px;
	color: #fff;
	padding: 0px;
	text-shadow: 1px 1px #424242;
	font-family: 'Mr Dafoe', cursive;

}

#registration-form{
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

	.help-text{
		// text-shadow: 1px 1px #424242;
		margin-right: 15px;
	}
	
}
</style>	

