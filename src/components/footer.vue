<script setup>
    //子组件

    //接收方式2 - 对象
    /*
    const props = defineProps({
        user: Number,
        ip: String
    })
    */
    const props = defineProps({
        user: Number,
        ip: {
            type: String,
            required: true, //true表示必传属性,若未传则会提示警告信息
            default: 'localhost' //未传默认值
        }
    })

    console.log(props)
</script>

<template>
    <h3>Footer</h3>
    user: {{ props.user }}
</template>

<style scoped>

</style>