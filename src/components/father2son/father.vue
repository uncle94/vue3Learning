<template>
  <h3>i am father</h3>
<!--  方式一 传参给子组件-->
<!--  <Son name="邓瑞编程" url="dengruicode.com" />-->

  <!--  方式二 传参给子组件-->
  <Son :="propweb"/>
  ==================
</template>

<script setup>

import { reactive } from 'vue'
import Son from './son.vue'
const  propweb=reactive({
  user:10,
  ip:'127.0.0.1'
})

const  useradd=()=>{
  propweb.user++
  console.log(propweb.user)
}
</script>

<style scoped>

</style>