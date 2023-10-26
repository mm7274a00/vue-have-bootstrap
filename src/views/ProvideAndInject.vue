<script>
import provideChild1 from '../components/ProvidePage/ProvideChild1.vue';
import {ref, provide} from 'vue';
export default{
    data(){
        return{
            dataMsg:"message",
            dataArr:['str','arr','ass']
        }
    },
    components:{
        provideChild1
    },
    methods:{
        addItem(){
            this.dataArr.push("xxx")
        }
    },
    provide(){
        return{
            msg:this.dataMsg,
            cool:"cool",
            arr:this.dataArr,
        }
    },
    setup(){
        let setupMsg = ref('setupMsg')
        provide('setupMsg',setupMsg)
        return{
            setupMsg
        }
    }
}
</script>

<template>
    <h1>Provide & Inject</h1>
    <p>。可理解為隔代遺傳，在爺爺的資料顯示在孫子的頁面</p>
    <h4>搭配input</h4>
    <p>。爺爺的數字更動，但孫子的數字不會跟著動</p>
    <p>。單純傳值無法做成響應式（陣列、物件可以）</p>
    <p>。點擊AddItem即可往陣列添加資料，並孫子頁面會更新</p>
    <br>
    <div class="warp">
        <h1>這是爺爺</h1>
        <p>這是爺爺的變數 dataMsg:{{ this.dataMsg }}</p>
        <input type="text" v-model="this.dataMsg">

        <button type="button" @click="addItem">addItem</button>
        <provideChild1 />
    </div>
</template>

<style lang="scss" scoped>
.warp{
    width: 500px;
    height: 500px;
    border: 1px solid black;   
}

</style>
