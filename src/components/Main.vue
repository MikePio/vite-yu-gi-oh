<script>
export default {
  name: 'Main',
  data(){
    return{

    }
  }

}
</script>

<template>
  <!-- <header class="h-200 d-flex flex-column justify-content-center"> -->
  <main class="p-4">
    <div class="form-floating">
      <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
        <!-- <option selected>Open this select menu</option> -->
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label for="floatingSelect">Works with selects</label>
      <div class="container p-3">
        <div>test</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../scss/main.scss' as *;

main{
  background-color: $primary-color;
  .form-floating{
    width: 150px;
  }
  .container{
    background-color: white;

  }
}
</style>