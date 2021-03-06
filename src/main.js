import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

import './style.css'

createApp(App)
  .use(router, axios)
  .mount('#app')
