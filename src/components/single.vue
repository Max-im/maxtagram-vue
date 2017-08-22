<template> 
  <div class="single">
    <div v-if="post">
      <div class="container_flex">
        <img class="single__img" :src='"./src/assets/img/"+post.photo' alt="">
        <div class="single__content">
          <span class="single__number">post# {{post.id}}</span>
          <h3 class="single__header">{{post.title}}</h3>
          <p class="single__text">{{post.text }}</p>
          <ul class="single__categoryList">
            <li class="single__categoryItem" v-for="item in post.category">
              <a  class="single__categoryLink" href="#">{{item}}</a>
            </li>
          </ul>
          <router-link class="single__back" to="/">назад</router-link> 
        </div>
      </div>

    </div>
  </div>

</template>




<script>
import db from '../assets/db.js';

export default {
  name: 'single',
  data () {
    return {
      // link: 'https://jsonplaceholder.typicode.com/photos',
      posts: db,
      post: null      
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
      const postId = this.$route.params.id;
      this.post = this.posts[postId];

  }

}
</script>



<style lang="scss">

.single{
  &__img{
    width: calc(50% - 40px);
    margin: 0 20px;
    box-sizing: border-box;
    border: 3px solid silver;
  }
  &__content{
    width: 50%;
    color: #333;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
  }
  &__header{
    font-size: 35px;
    text-transform: uppercase;
    margin: 20px 0;
  }
  &__number{
    display: inline-block;
    background: #ff2d00;
    padding: 0px 10px;
    border-radius: 100px;
  }
  &__back{
    display: inline-block;
    padding: 0px 25px;
    margin: 50px 0 0 0;
    color: #333;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;
    background: silver;
    transition: all .4s;  
    border: 1px solid #333;
    &:hover{
      background: #ff2d00;
      color: #fff;
      transition: all .4s;
    }
  }
  &__categoryList{
    list-style: none;
  }
  &__categoryItem{
    display: inline-block;
  }
  &__categoryLink{
    display: block;
    padding: 0 20px;
    margin: 0 5px;
    border-radius: 100px;
    color: #fff;
    border:2px solid #fff;
    background: #333;
    &:hover{
      border:2px solid #ff2d00;
      background: rgba(0,0,0,.6);
    }
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
.single{
  &__img{
    width: calc(80% - 40px);
    margin: 20px;
  }
  &__content{
    width: 100%;
    line-height: 30px;
    padding: 0 15px;
  }
  &__header{
    font-size: 25px;
    margin: 20px 0;
  }
  &__back{
    margin: 30px 0 0 0;
  }
}



}


/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

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
