<template> 
  <div class="photoGrid">
    <div class="container_flex">
      <div class="photoGrid__item" v-for="(post, index) in posts">
        <h3 class="photoGrid__header">{{post.title}}</h3>
        <img class="photoGrid__img" :src="'../../assets/img/'+post.photoMin" alt="">
        <router-link class="photoGrid__readMore" :to="{name: 'post', params: {id: index} }">подробнее</router-link> 
      </div>
    </div>
  </div>

</template>




<script>
import db from '../../assets/db.js';

export default {
  name: 'photoGrid',
  data () {
    return {
      // link: 'https://jsonplaceholder.typicode.com/photos',
      posts: db      
    }
  },
  methods:{
    // getPosts: function() {
      
    //   const options = {
    //     params: {
    //       _start: 800,
    //       _limit : 30 
    //     }
    //   }

    //   this.$http.get(this.link, options)
    //     .then(
    //       function(response) {
    //         this.posts = response.body;
    //       },
    //       function(error) {

    //       }
    //     )
    // }
  },
  created: function() {
    // this.getPosts();
  }

}
</script>



<style lang="scss">

.photoGrid{
  &__item{
    flex: 0 0 calc(25% - 30px);
    height: 350px;
    margin: 10px 15px;
    position: relative;
    box-sizing: border-box;
    border: 5px solid silver;
    text-align: center;
    overflow: hidden;
    &:after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: -100%;
      left: 0;
      background: rgba(0,0,0,.7);
      z-index: 0;
    }
    &:hover{
      &:after{
        top: 0;
      }
      .photoGrid__readMore{
        bottom: 10px;
      }
    }
  }
  &__header{
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    font-weight: 100;
    text-shadow: 1px 1px 2px black;
    width: calc(100% - 20px);
    left: 10px;
    top: 10px;
    box-sizing: border-box;
    z-index: 1;
  }
  &__img{
    width: 100%;
    height: 100%;
  }
  &__readMore{
    position: absolute;
    bottom: -60px;
    left: -100%;
    right: -100%;
    border: 1px solid silver;
    padding: 10px 25px;
    width: 100px;
    background: rgba(255,255,255,.5);    
    display: block;
    margin: 10px auto;
    color: #95d289;
    z-index: 1;
    text-shadow: 1px 1px 2px black;
    transition: all .3s;  
    &:hover{
      background: #ff2d00;
      color: #fff;
      transition: all .3s;
    }
  }
}




 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {

  .photoGrid{
    &__item{
      flex: 0 0 calc(33% - 30px);
      height: 350px;
      margin: 10px 15px;
    }
  }
  

}






/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
  .photoGrid{
    &__item{
      flex: 0 0 calc(50% - 30px);
      height: 350px;
      margin: 10px 15px;
    }
  }


}


/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

.photoGrid{
    &__item{
      flex: 0 0 calc(100% - 20px);
      height: 350px;
      margin: 10px 10px;
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
