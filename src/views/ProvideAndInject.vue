<script>
import provideChild1 from '../components/ProvidePage/ProvideChild1.vue';
export default{
    data(){
        return{
            dataMsg:"message",
            // dataArr:['str','arr','ass']
        }
    },
    // methods:{
    //     addItem(){
    //         this.dataArr.push("xxx")
    //     }
    // },
    provide(){
        return{
            msg:this.dataMsg,
            // cool:"cool",
            // arr:this.dataArr,
        }
    },
    // setup(){
    //     let setupMsg = ref('setupMsg')
    //     provide('setupMsg',setupMsg)
    //     return{
    //         setupMsg
    //     }
    // }
}
</script>

<template>
    <h1>Provide & Inject</h1>
    <p>。可理解為隔代遺傳，單純傳值無法做成響應式（陣列、物件可以）</p>

    <div class="warp">
        <h1>這是爺爺</h1>
        <p>這是爺爺的變數 dataMsg:{{ this.dataMsg }}</p>
        <ProvideChild1 />
    </div>
</template>

<style lang="scss" scoped>
.warp{
    width: 600px;
    height: 600px;
    border: 2px solid black;
}

</style>
