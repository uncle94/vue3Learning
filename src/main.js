 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//use(router) 将Vue Router实例注册到Vue应用中
createApp(App).use(router).mount('#app')
