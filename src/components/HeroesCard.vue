<template>
    <div class="card">
      <img class="card__img" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="">
      <p class="card__name">Люк Скайвокер</p>
      <div class="card__like-wrap">
        <button class="card__like" >Лайк</button>
      </div>
    </div>
</template>

<script>
    export default {
      data(){

      },
      props:['heroes'],
    }
</script>

<style scoped>

</style>
