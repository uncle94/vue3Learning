<script setup>
//子组件

//接收方式1 - 数组
/*
    defineProps是Vue3的编译时宏函数,
    用于接收父组件向子组件传递的属性(props)

    注
    当使用Vue编译器编译包含defineProps的组件时,
    编译器会将这些宏替换为相应的运行时代码
*/
const props = defineProps(["propsName","propsUrl"])
console.log(props)
</script>

<template>
  <h3>Header</h3>
</template>

<style scoped>

</style>