<template>
  <the-header></the-header>
  <div class="container">
    <router-view></router-view>
    <p>{{info}}</p>
  </div>

</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        info: null,
      }
    },
    components: {
      TheHeader
    },
    mounted() {
      function getHeroesData(){
        axios
          .get('https://swapi.dev/api/people/')
          .then(function (response) {
            showDetail(response.data)
          })
      }
      getHeroesData()
    }
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
