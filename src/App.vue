<template>
  <the-header></the-header>
  <div class="container">
    <router-view></router-view>
<!--    <p>{{info}}</p>-->
<!--    <button v-on:click="showMust"></button>-->
  </div>

</template>

<script>
  import TheHeader from './components/TheHeader.vue'

  import axios from 'axios'

  export default {
  data(){
    return{

    }
  },
    methods:{},
    components:{
    TheHeader,
    },


  }
</script>

<style>
  #app {
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
