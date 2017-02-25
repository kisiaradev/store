<template>
	<div>
		<user-header></user-header>
		<user-catalog></user-catalog>
	</div>
</template>

<script>
import Header from './Shared/Header.vue'
import Catalog from './Pages/Catalog.vue'

export default{

	//register components that shall be used within EndUser only
	components: {
		'user-header': Header,
		'user-catalog': Catalog
	}
}
</script>

<style>
	
</style>	