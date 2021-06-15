import {createRouter, createWebHistory} from 'vue-router'
import Heroes from './views/Heroes'
import Home from './views/Home'


export default createRouter({ // вызываем его и в качестве параметра передаем объект, где мы настраиваем роуты
  history: createWebHistory(),
  routes:[
    {path:'/', component: Home,},
    {path:'/heroes', component: Heroes} // http://localhost:8080/heroes
  ],
  linkActiveClass:'active-link'
})
