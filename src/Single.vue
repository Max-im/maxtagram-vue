<template>
  <div id="single">
  	<vHeader></vHeader>
    <vSingle></vSingle>	   
  </div>
</template>

<script>
import vHeader from "./components/header.vue";
import vSingle from "./components/single.vue";

export default {
  name: 'single',
  components: {
  	vHeader,
    vSingle
  }
}
</script>

<style lang="scss">

</style>
