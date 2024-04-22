<script setup>
import { provide, ref } from 'vue'

//导入子组件
import Header from "./son1.vue"

//provide用于父组件将 数据 提供给所有子组件
/*
  若使用了provide和inject来进行数据传递,
  则一般不需要再使用defineProps
*/
//要传给子组件的key（自定义）和对应的对象
provide("provideWeb",{name:"邓瑞",url:"www.dengruicode.com"})

//传递响应式数据
const user = ref(0)
provide("provideUser",user)

//添加用户
const userAdd = () => {
  user.value++
}
//用于父组件将 函数 提供给所有子组件
provide("provideFuncUserAdd",userAdd)
</script>

<template>
  <h3>App.vue-Top组件</h3>

  {{ user }}

  <!-- 子组件 -->
  <Header/>
</template>

<style scoped></style>