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
  <main class="p-4">

    <!-- container con la select -->
    <div class="container mp-container">
      <div class="form-floating">
        <!-- <select class="form-select" id="floatingSelect" aria-label="Floating label select example"> -->
          <select class="select form-select p-1" aria-label="Floating label select example">
            <!-- <option selected>Open this select menu</option> -->
            <option value="1">Alien</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      
      <!-- container grande -->
      <div class="container p-3 my-3">
        <!-- risultato cards -->
        <div class="result-api p-3">
          <div class="fs-5" >Found 30 cards</div>
        </div>
        <!-- container cards -->
        <div class="container p-3 my-3">
          
          
        </div>
      </div>




  </main>
</template>

<style lang="scss" scoped>
  @use '../scss/main.scss' as *;

main{
  background-color: $primary-color;

  .container.mp-container{
    background-color: $primary-color;
  }
  .form-floating{
    width: 150px;
  }
  .select{
    width: 150px;
    border-radius: 5px;
  }
  .container{
    background-color: white;
    .result-api{
      background-color: #212529;
      color: white;
      
    }

  }
}
</style>