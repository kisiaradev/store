<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
//Register the Site and Admin Components

export default {
    // components: {
    // 	''
    // }
}
</script>

<!-- System wide styles -->
<style>
html, body, #app{
    height: 100%;
}

body{
	font-family: 'Roboto', sans-serif;
	color: #333;
	font-size: 12px;
	color: #333;
}	

button{
    outline: none;
}

.help-text{
    color: #e74c3c;
    font-weight: 500;
    font-style: normal;
}
</style>	
