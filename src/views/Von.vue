<script>
export default{
    //data : function(){}
    // ES6 語法糖
    data(){
        return{
            title:"cool"
        }
    },
    methods:{
        print(){
        console.log(this.title)
    }
    }
}
</script>

<template>
    <h1>v-on</h1>
    <!--<button type="button" v-on:click="print()">btn</button>-->
    <button type="button" @click="print()">btn</button>
</template>

<style lang="scss" scoped>
</style>
