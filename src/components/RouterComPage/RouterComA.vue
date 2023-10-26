<script>
export default {
    methods:{
        goOtherWay(){
            this.$router.push('/Von')
        }
    }
}
</script>

<template>

<h3>ComA</h3>
<br>
<h3>延伸使用</h3>
<p>。利用 this.$router.push 的工具，把使用者導向其他路由點</p>
<button type="button" @click="goOtherWay">goOtherWay-Von</button>
</template>

<style lang="scss" scoped>

</style>
