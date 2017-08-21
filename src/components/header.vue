<template> 
  <header class="header">
    <router-link to="/">
      <h1 class="header__mainHeader">{{mainHeader}}</h1>
    </router-link> 
  </header>

</template>




<script>
export default {
  name: 'header',
  data () {
    return {
      mainHeader: "Maxtogram"

    }
  },
  methods:{

  },

}
</script>



<style lang="scss">

.header{
  padding: 50px 0;
  &__mainHeader{
    font-family: 'Lobster Two', cursive;
    text-align: center;
    font-size: 100px;
    text-decoration: none;
    color: #ff2d00;
    text-shadow: 2px 2px 1px rgba(0,0,0,.7);
  }
}




 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {
  

}






/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
  .header{
    padding: 30px 0;
    &__mainHeader{
      font-size: 70px;
    }
  }


}


/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

  .header{
    padding: 20px 0;
    &__mainHeader{
      font-size: 50px;
    }
  }

}





/* Custom, iPhone Retina */
@media only screen and (max-width : 320px) {



}






/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {




}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {



}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {



}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {



}


</style>
