<template>
	<div class="reveal dashboard-modal tiny" id="add-item" data-reveal data-options="showDelay:200; hideDelay:50">
		<div class="modal-header">
			<h2>Add an Item to Your Store</h2>
		</div>

		<form>
	  		<div class="row">
	    		<div class="medium-12 columns">
	      			<label>Item Name
	        			<input type="text">
	      			</label>
	    		</div>
	    		<div class="medium-12 columns">
	      			<label>Price of Item
	        			<input type="text">
	      			</label>
	      			<p class="help-text">prices are all in euros</p>
	    		</div>
	    		<div class="medium-12 columns">
	      			<label>Item Description
        				<textarea></textarea>
      				</label>
	    		</div>
	  		</div>

	  		<div class="row">
	  			<div class="button-container">
	    			<div class="medium-12 columns">
	    				<button type="submit" class="button success">Submit Item Details</button>
		    		</div>
	    		</div>
	  		</div>
		</form>
	  	
	</div>
</template>

<style lang="scss">
.dashboard-modal{
	outline: none;
	padding: 0px;
	border: none;
	border-radius: 0px;
	margin-top: 40px;

	input, textarea{
		height: 35px;
		font-size: 12px;
		border-radius: 0px;
	}

	textarea{
		height: 100px;
		resize: none;
	}
}	

.modal-header{
	background-color: #2c3e50;
	margin: 0px;
	padding: 0px;
	margin-top: -15px;
	min-height: 50px;
	font-family: 'Open Sans';

	h2{
		color: #2ecc71;
		font-size: 12px;	
		padding-left: 20px;
		line-height: 55px;
	}
}

.button-container{
	border-top: 1px dotted #2ecc71;
	padding-top: 15px;

	button{
		height: 35px;
		font-size: 12px;
		border-radius: 0px;
	}
}

</style>