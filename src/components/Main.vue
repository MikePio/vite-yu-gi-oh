<script>
import Card from "./Card.vue";
import { store } from "../data/store";
export default {
  name: "Main",
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main class="p-4">
    <!-- container con la select -->
    <div class="container mp-container d-flex ">
      <select @click="$emit('searchCards')" v-model="store.selectedType" class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option value="null" selected>Choose a type</option>
        <!-- <option value="null" @click="$emit('searchCards'), $emit('resetSearch')" selected>Choose a type</option> -->
        <!-- <option @click="$emit('searchCards')"  selected>Choose a type</option> -->
        <!-- <option @click="$emit('searchCards')">All</option> -->
        <!-- <option @click="$emit('resetSearch')" value="null" >All</option> -->
        <option v-for="type in store.arrayTypes" :key="type" :value="type">{{ type }}</option>
      </select>
      <!-- <button @click="$emit('searchCards')" class="btn btn-warning">Search</button> -->
      <button @click="$emit('resetSearch')" class="btn btn-danger ms-3">Reset</button>
    </div>

    <!-- container grande -->
    <div class="container p-3 my-3 d-flex flex-column align-items-center justify-content-center">
      <!-- risultato cards -->
      <div class="result-api p-3">
        <!-- <div class="fs-5" >Found 30* cards</div> -->
        <div class="fs-5">Found {{ store.arrayCards.length }} cards</div>
      </div>
      <!-- container cards -->
      <!-- <div class="container p-3 my-3 d-flex flex-wrap"> -->
      <!-- <div class="container d-flex flex-wrap justify-content-between p-0"> -->
      <div class="container d-flex flex-wrap p-0">
        <Card
          v-for="item in store.arrayCards"
          :key="item.id"
          :imgUrl="item.card_images[0].image_url"
          :name="item.name"
          :type="item.type"
        />
        <!--* Oppure al posto di type -->
        <!-- :type="item.archetype" -->

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
            -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../scss/main.scss" as *;

main {
  background-color: $primary-color;

  .container.mp-container {
    background-color: $primary-color;
  }

  // .form-floating {
  //   width: 150px;
  // }

  .form-select-sm{
    width: 200px;
  }

  .select {
    width: 150px;
    border-radius: 5px;
  }

  .container {
    background-color: white;

    .result-api {
      background-color: #212529;
      color: white;
      width: calc(100% - 20px);
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