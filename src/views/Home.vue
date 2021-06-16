<template>

<!--  <h1>Это главная страница</h1>-->

  <div class="gallery">
    <ul class="gallery__list">
      <li class="gallery__item">
        <heroes-card
          v-for="hero in heroes"
          :key="hero.id"
          :heroes="heroes"
        >
        </heroes-card>
      </li>

    </ul>
  </div>

</template>

<script>
  import HeroesCard from "../components/HeroesCard";



  import axios from 'axios'

  export default {
    data() {
      return {
        heroes: [],

      }
    },
    components: {
      HeroesCard,
    },
    methods:{
      showMust(){
        console.log(this.heroes[1])
      }
    },
    created() {


      const names = []
      this.heroes = names
      console.log(this.heroes)

      function getHeroesData(apiURL){
        axios
          .get(apiURL)
          .then(function (response){
            showDetail(response.data)
          })
      }
      function showDetail(data){

        const heroesList = Object.keys(data.results).map(key => {
          return{
            id: Number(key) + 1,
            name: data.results[key].name,
            gender: data.results[key].gender
          }

        })
        names.push(heroesList)
        if(data.next){
          getHeroesData(data.next)
        }
      }

      getHeroesData('https://swapi.dev/api/people')

    }
  }
</script>

<style scoped>

</style>
