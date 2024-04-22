<template>
  <!-- 子传父 -->
<B @web="emitsWeb" @user="emitsUser"/>
i am father
  {{ web.url }} - {{ user }}
</template>


<script setup>

import { reactive,ref } from 'vue'

//导入子组件
import B from "./b.vue"
// 接收子组件的事件 data为子组件传来的数据
const emitsWeb=(data)=>{
  console.log("emitsWeb",data)
 web.url=data.url
}

const emitsUser=(data)=>{
  console.log("data: ==",data)
  user.value +=data
}

//响应式数据
const web = reactive({
  name: "邓瑞编程",
  url: 'dengruicode.com'
})

const user = ref(0)
</script>

<style scoped>

</style>

