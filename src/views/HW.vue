<script>
import {RouterLink,RouterView} from 'vue-router'
import HouseHeader from '../components/HwHeader.vue';
export default {
    data(){
        return{}
    },
    methods:{

    },
    components:{
        HouseHeader,
        RouterLink,
        RouterView,
    },
}
</script>

<template>
    <div class="topArea">
        <HouseHeader />
    </div>
    <div class="contentArea">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
.contentArea{
    margin: auto;
    width: 1440px;
    height: 800px;
    background-color: aqua;
}
</style>