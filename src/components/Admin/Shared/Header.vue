<template>
	<div>
		<div class="top-bar">
			<div class="top-bar-title">
				<!-- {{ user.store }} -->
				Cytonn Bike Store
			</div>
    		<div class="top-bar-left">
    			<ul class="menu simple">
    				<router-link to="logout" tag="li">
    					<a class="logout">Logout</a>
    				</router-link>

    				<li>
    					<button class="success button small" data-open="add-item">
    						<i class="fi-plus"></i>New Item
    					</button>
    				</li>
				</ul>
				
    		</div>
    		<div class="top-bar-right ">
    			<ul class="menu simple">
				  <li>Put logout details here</li>
				</ul>
    		</div>
		</div>


	<!-- Modals -->
	<!-- Add Item Modal -->
	<add-item-form></add-item-form>	

	

	</div>
</template>

<script>
import AddItemForm from '../Pages/AddItemForm.vue' 

export default{
	
	data: function(){
		return {
			addItem: false
		}
	},

	props: [
		'user'
	],

	components: {
		'add-item-form': AddItemForm
	},

	methods: {
		launchAddItemModal(){
			this.addItem = true;
		}
	}

}	
</script>


<style lang="scss" scoped>
.top-bar{
	background-color: #2c3e50;
	font-size: 12px; 
	padding: 15px 10px;

	.top-bar-title{
		font-family: 'Mr Dafoe', cursive;
		color: #16a085;
		display: inline-block;
		font-size: 26px;
		margin-left: 20px;
	}

	.menu{
		background-color: #2c3e50;

		li button{
			border-radius: 0px;
			margin-left: 15px;
			i{
				display: inline-block;
				margin-right: 5px;
			}
		}

		a{
			color: #fff;
			text-decoration: none;
		}

		.logout{
			font-weight: bold;
			border-bottom: 1px dotted #16a085;
			padding-bottom: 4px;
		}
	}
}
</style>