<script setup>
  import { reactive } from 'vue'

  //导入子组件
  //App.vue是父组件,因为它包含了header.vue和footer.vue两个子组件
  import Header from "./components/header.vue"
  import Footer from "./components/footer.vue"


  /*
  const propsWeb = {
    user: 10,
    ip: '127.0.0.1'
  }
  */
  //响应式数据
  const propsWeb = reactive({
    user: 10,
    ip: '127.0.0.1'
  })

  //添加用户
  const userAdd = () => {
    propsWeb.user++
    console.log(propsWeb.user)
  }
</script>

<template>
  <!-- 父传子 - 方式1 -->
  <Header propsName="邓瑞编程" propsUrl="dengruicode.com" />

  dengruicode.com

  <button @click="userAdd">添加用户</button>

  <!-- 父传子 - 方式2 -->
  <!-- <Footer v-bind="propsWeb" /> -->
  <Footer :="propsWeb" />
</template>

<style scoped></style>