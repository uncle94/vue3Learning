<template>
<h3>i am son </h3>
  {{fatherValue}}

</template>

<script setup>

import { defineProps } from 'vue'

/*  方式一 接受父参数 */
// const props = defineProps(["name","url"])
/*  方式二 接受父参数 */
const fatherValue = defineProps({
  user: Number,
  ip: {
    type: String,
    required: true, //true表示必传属性,若未传则会提示警告信息
    default: 'localhost' //未传默认值
  }
})

</script>

<style scoped>

</style>