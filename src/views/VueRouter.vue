<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components :{
        RouterLink,
        RouterView
    }
}
</script>

<template>
<h1>Hi! This is VueRouter</h1>
<RouterLink to="/VueRouter/RouterComA">ComA</RouterLink>
<RouterLink to="/VueRouter/RouterComB">ComB</RouterLink>
<RouterView />
</template>

<style lang="scss" scoped>


</style>
