<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    components:{
        RouterLink,
        RouterView
    }
}
</script>

<template>
<h1>VueRouter</h1>
<p>。設定子路由：
<RouterLink to="/VueRouter/RouterComA">ComA</RouterLink>、
<RouterLink to="/VueRouter/RouterComB">ComB</RouterLink></p>
<p>。點擊即可顯示子路由的內容</p>
<RouterView />
</template>

<style lang="scss" scoped>


</style>
