<template>
	<div class='top-bar'>
		<div class='top-bar-left'>    		
			<nav>
				<router-link to='/admin' id="admin">
					<i class="fi-torso-business"></i>
				</router-link>
    		</nav>
  		</div>
		
		<div id='search' >
			<div class='search-icon'>
				<p class="dafoe">
					Cytonn Bike Store 
				</p>
			</div>
		</div>
	
  		<div class='top-bar-right'>
  			<span class="search-icon">
  				<i class='fi-magnifying-glass'></i>
  			</span>
    		<nav class='float-right'>
    			<span class='cart'>
    				<i class='fi-shopping-cart'></i><span class='items'>{{ cartItems }}</span>
    			</span>
    		</nav>
  		</div>
	</div>
</template>

<script>

export default{
	data: function(){
		return {
			cartItems: 6
		};
	},

	methods: {
		switchRoute(){

		}
	}
}

</script>

<style lang="scss">
.dafoe{
	font-family: 'Mr Dafoe', cursive;
	color: #e67e22;
	display: inline-block;
	font-size: 17px;
}

.search-icon{
	i{
		display: inline-block;
		margin-top: 13px; 
		margin-left: 470px;
		font-weight: lighter;
		font-size: 25px;
		color: #ababab;
	}
}

.top-bar{
	min-height: 60px;
	padding: 0px;

	nav{
		width: 60px;
		height: 60px;
		background-color: #2c3e50;
		font-size: 22px;
		font-weight: lighter;
		
		padding: 0;
		margin: 0;

		#admin{
			display: block;
			width: 18px;
			margin: auto;
			padding-top: 15px;
			transition-duration: 300ms;
			color: #1abc9c;

			&:hover{
				cursor: pointer;
				color: #fff;
			}
		}
	}

	.top-bar-right{
		nav{
			background-color: #1abc9c;
			.cart{
				display: inline-block;
				width: 60px;
				height: 35px;
				color: #333;
				margin-left: 0px;
				margin-top: 15px;
				text-align: center;
				position: absolute;

				.items{
					background-color: #fff;
					font-size: 10px;
					display: inline-block;
					width: 13px;
					height: 13px;
					line-height: 14px;
					border-radius: 25px;
					font-weight: 900;
					position: absolute;
					left: 30px;
				}
			}
		}
	}
}



</style>