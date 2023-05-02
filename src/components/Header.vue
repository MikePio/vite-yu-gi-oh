<script>
export default {
  name: 'Header',
  data(){
    return{

    }
  }

}
</script>

<template>
  <header class="p-3  d-flex align-items-center">
    <img class="" src="public\img\logo.png" alt="logo-img">
    <div class="px-2 fs-1 text">Yu-Gi-Oh Api</div>
  </header>
</template>

<style lang="scss" scoped>
  @use '../scss/main.scss' as *;

  img{
    // width: 100px;
    height: 20px;
  }
</style>