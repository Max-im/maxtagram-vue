<template>
  <div id="app">
  	<vHeader></vHeader>
    <vPhotoGrid></vPhotoGrid>   
  </div>
</template>

<script>
import vHeader from "./components/header.vue";
import vPhotoGrid from "./components/photoGrid.vue";

export default {
  name: 'app',
  components: {
    vHeader,
    vPhotoGrid,
  }
}
</script>

<style lang="scss">

*{
	margin: 0;
	padding: 0;
}

a{
	outline: none;
	text-decoration: none;
}

body{
	font-family: 'sans serif', ubuntu, arial;
}

.container{
	display: block;
	width: 100%;
	max-width: 1280px;
	min-width: 320px;
	margin: 0 auto;
	&_flex{
		@extend .container;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
}


</style>
