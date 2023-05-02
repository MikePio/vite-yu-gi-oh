<script>
import Card from './Card.vue'
export default {
  name: 'Main',
  components: { 
    Card
  },
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
        <!-- <div class="container p-3 my-3 d-flex flex-wrap"> -->
        <div class="container d-flex flex-wrap justify-content-between p-0">

          <Card/>
          
          <!-- <div class="container d-flex flex-wrap p-0"> -->

            <!--* card  con mb-3-->
            <!--             
              <div class="mp-card mb-3">
                <img src="public\img\logo.png" class="card-img-top" alt="img">
                <div class="card-body">
                  <h5 class="card-title text-center pt-3">Card title</h5>
                  <p class="card-text text-center py-3">Some</p>
                </div>
              </div> -->
              
              <!--* card con col-->
              <!-- <div class="mp-card col">
                <img src="public\img\logo.png" class="card-img-top" alt="img">
                <div class="card-body">
                  <h5 class="card-title text-center pt-3">Card title</h5>
                  <p class="card-text text-center py-3">Some</p>
                </div>
              </div> -->
              
              
              <!--* card senza col -->
          <!-- <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div>
            
          <div class="mp-card">
            <img src="public\img\logo.png" class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title text-center pt-3">Card title</h5>
              <p class="card-text text-center py-3">Some</p>
            </div>
          </div> -->
            



          
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

  //CODICE UTILIZZATO IN PRECEDENZA PER LE CARDS E ADESSO SPOSTATO NEL COMPONENTE CARD 

  // .mp-card{
  //   width: calc(100% / 5 - 20px);
  //   // width: calc((100% / 5 ) - 10px);
    
  //   // width: calc(100% / 5 );
    
  //   // width: 250px;
  //   height: 400px;
  //   // border: 1px blue dashed;
  //   // margin: 0 10px 40px 10px;
  //   // margin: 0 0px 40px 0px;
  //   margin-bottom: 40px;
  //   img{
  //     height: 300px;
  //   }
  //   .card-body{
  //     background-color: $primary-color;
  //   }
  // }

}
</style>