<script>
import ProvideChild2 from '../ProvidePage/ProvideChild2.vue';
export default{
    data(){
        return{

        }
    },
    components:{
        ProvideChild2
    }
}
</script>

<template>
    <div class="warp">
        <h1>這是父層</h1>
        <ProvideChild2 />
    </div>
</template>

<style lang="scss" scoped>
.warp{
    width: 500px;
    height: 240px;
        border: 1px solid black;
}

</style>
