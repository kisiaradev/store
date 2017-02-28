<template>
<div>
	<store-header>
		
		{{ user }}
	</store-header>
</div>
</template>

<script>
import AdminStoreHeader from '../Shared/AdminStoreHeader.vue'

export default{
	props: [
		'user'
	],

	components: {
		'store-header': AdminStoreHeader
	}
}	
</script>

