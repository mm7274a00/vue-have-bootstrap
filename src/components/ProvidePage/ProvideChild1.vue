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
    width: 600px;
    height: 600px;
    border: 1px solid black;
    background-color: palevioletred; 
}

</style>
