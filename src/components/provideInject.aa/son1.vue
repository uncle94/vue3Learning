<script setup>
import { provide, inject } from 'vue'

//导入子组件
import Son2 from "./son2.vue"

//子组件通过inject注入父组件提供的 响应式数据
const user = inject("provideUser")
console.log("provideUser:",user.value)

//provide用于父组件将 数据 提供给所有子组件
provide("provideUrl","www.com")
</script>

<template>
  <h3>header.vue-Middle组件</h3>

  <!-- 子组件 -->
  <Nav/>
</template>

<style scoped>

</style>