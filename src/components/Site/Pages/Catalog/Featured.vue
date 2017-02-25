<template>
	<div>
		<div v-if="showFeatured" id="featured">
			<div class="row">
				<div class="columns medium-3">
					<p class="dafoe intro">
						{{ featuredBike.introduction }}
					</p>
					<p class="tagline">
						{{ featuredBike.tagline}}
					</p>
				</div>
				<div class="columns medium-6">
					<img :src="featuredBike.image" alt="">
				</div>
				<div class="columns medium-3">
					<div class="details">
						<p class="f-name">{{ featuredBike.name }}</p>
						<p>
							<span class="f-price"><sub>&euro;</sub> {{ featuredBike.price }}</span>
							<button class="f-add"><i class="fi-plus"></i></button>	
						</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- <button class="button" @click="showMe">{{ featuredBike.image }}</button> -->

		
		
	</div>
</template>

<script>
import { featured } from '../../../../resources/featured.js'

export default{
	data: function(){
		return {
			showFeatured: true,
			featuredBike: featured
		};
	},

	methods: {
		showMe(){
			console.log(this.featuredBike);
		}
	}
}	
</script>

<style lang="scss">
#featured{
	border-bottom: 1px solid #ddd;
}

.dafoe.intro{
	color: #333;
	font-size: 32px;
	width: 100%;
	// background-color: red;
	text-align: left;
	margin: 0px;
	margin-left: 7px;
	margin-top: 140px;
}
.tagline{
	color: #e67e22;
	// background-color: yellow;
	margin: 0px;
	text-align: left;
	font-size: 16px;
	font-family: 'Open Sans';
	border-top: 1px solid #333;
	padding-top: 5px;
}

.details{
	margin-top: 155px;
	margin-left: 50px;

	p{
		margin: 0px;
		padding: 0px;
		width: 150px;
		
		
	}

	.f-name{
		background-color: #2c3e50;
		text-align: center;	
		color: #1abc9c;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 10px; 
		padding: 10px 0px;
	}	

	.f-price{
		background-color: #e6e6e6;
		display: inline-block;
		padding: 10px 0px; 
		width: 100px;
		margin: 0px;
		text-align: center;
		font-weight: 600;
		color: #333;
	}

	.f-add{
		background-color: #1abc9c;
		border-radius: 0px;
		margin: 0px;
		margin-left: -3px;
		width: 50px;
		padding: 13px 0px; 

		i{
			font-size: 12px;
		}
	}
}
</style>