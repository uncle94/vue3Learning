<script setup>
  import { reactive } from 'vue'

  //导入子组件
  import Father from "./components/father2son/father.vue"
  import A from "./components/son2father/a.vue"
  import B from "./components/son2father/b.vue"
  import Foot from "./components/foot.vue"
  import Header from "./components/header.vue"

</script>

<template>
  <!-- 3.定义路由填充位 该位置用来展现具体页面(组件) -->
  <router-view />
<!--  <A/>-->
  <hr>
  dengruicode.com
</template>

<style scoped></style>