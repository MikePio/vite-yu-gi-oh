<script>
// import axios from "../node_modules/axios/dist/axios"
import axios from "axios"
import { store } from "./data/store"
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      //* parametri fissi (num = 22 e offset = 0)
      // axios.get(store.apiUrl + "?num=22&offset=0")
      //* parametri dinamici
      // * i parametri ora vengono cercati tramite params che sono: num e offset (vedi la riga precedente) 
      axios.get(store.apiUrl, {
        params:{
          num: store.numberCards,
          offset: store.offsetCards 
        }
      })
        // test errore
        // axios.get(store.apiUrl + "ptz?num=20&offset=0")
        .then(result => {
          // console.log(result.data.data);
          store.arrayCards = result.data.data;
          // console.log(store.arrayCards);

          // i type vengono presi dall'array delle cards per poi essere pushati in un altro array ed utilizzati nella select per riceracare le card
          // * Con forEach
          store.arrayCards.forEach(element => {
            //vengono stampati tutti i type dell'array arrayCards
            // console.log(element.type);
            if (!store.arrayTypes.includes(element.type)) {
              store.arrayTypes.push(element.type);
              console.log('forEach', element.type);
            }
          });

          // * Con filter
          // store.arrayCards.filter(element => {
          //   if (!store.arrayTypes.includes(element.type)) {
          //     store.arrayTypes.push(element.type);
          //     console.log('filter', element.type);
          //   }
          // });

        })
        .catch(error => {
          console.log(error);
        })

    }
  },
  mounted() {
    this.getApi();
  }


}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@use './scss/main.scss'
</style>
