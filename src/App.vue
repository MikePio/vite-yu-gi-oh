<script>
// import axios from "../node_modules/axios/dist/axios"
import axios from "axios"
import {store} from "./data/store"
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components:{
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + "?num=20&offset=0")
      .then(result => {
        // console.log(result.data.data);
        store.arrayList = result.data.data;
        // console.log(store.arrayList);
      })
      
    }
  },
  mounted(){
    this.getApi();
  }


}
</script>

<template>
  <Header/>
  <Main/>
</template>

<style lang="scss">
@use './scss/main.scss'
</style>
