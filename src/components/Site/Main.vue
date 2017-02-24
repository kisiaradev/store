<template>
	<div>
		<user-header></user-header>
	</div>
</template>

<script>
import Header from './Shared/Header.vue'

export default{

	//register components that shall be used within EndUser only
	components: {
		'user-header': Header 
	}
}
</script>

<style>
	
</style>	