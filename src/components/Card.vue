<script>
export default {
  name: 'Card',
  props:{
    imgUrl: String,
    name: String,
    type: String
  },
  data(){
    return{

    }
  }

}
</script>

<template>

  <div class="mp-card">
    <img :src="imgUrl" class="card-img-top" :alt="name">
    <div class="card-body">
      <h5 class="card-title text-center pt-3">{{name}}</h5>
      <p class="card-text text-center">{{type}}</p>
      <!-- <h5 class="card-title text-center pt-3">{{name}}</h5>
      <p class="card-text text-center py-3">{{type}}</p> -->
    </div>
  </div>

</template>


<style lang="scss" scoped>
  @use '../scss/main.scss' as *;

  .mp-card{
    width: calc(100% / 5 - 20px);
    height: 400px;
    // border: 1px blue dashed;
    margin: 0 10px 40px 10px;
    height: 400px;
    img{
      height: 300px;
    }
    .card-body{
      background-color: $primary-color;
      height: 125px;
      // min-height: 125px;
      // max-height: 125px;
      .card-title{
        color: white;
        height: 80px;
      }
    }
  }

</style>