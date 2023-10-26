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
        provide('setupMSG', setupMsg)
        return{
            setupMsg
        }
    }
}
</script>

<template>
    <h1>Provide & Inject</h1>
    <p>。可理解為隔代遺傳，在父層（爺爺）的資料顯示在子層內孫層（孫子）的頁面</p>
    <h4>搭配 input 及 @click</h4>
    <p>。爺爺的數字更動，但孫子的數字不會跟著動</p>
    <p>。單純傳值無法做成響應式（陣列、物件可以）</p>
    <p>。點擊AddItem即可往陣列添加資料，並孫子頁面會更新</p>
    <p></p>
    <br>
    <div class="under">
        <div class="warp">
        <h1>這是爺爺</h1>
        <p>爺爺的變數：</p>
        <input type="text" v-model="this.dataMsg">
            <p>dataMsg:{{ this.dataMsg }}</p>
        <input type="text" v-model="this.setupMsg">
        <p>{{ this.dataArr }}</p>
        <button type="button" @click="addItem">addItem</button>
        <provideChild1 />
        </div>
        <div class="text">
            <h4>如左側範例：</h4>
            <p>。input-message：僅有進行初始設定，孫層數值不會同時更新</p>
            <p>。input-setupMsg：搭配 ref 成為響應式，孫層數值同步更新</p>
            <p>。buttom-addItem：使用 arr[] 陣列搭配 @click ，向陣列內添加數值</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.warp{
    width: 500px;
    height: 300px;
    border: 2px solid black;
    text-align: center;
    background-color: rgb(214, 220, 239);
}
.under{
    display: flex;
    .text{
        margin-top: 10px;
        margin-left: 100px;
    }
}

</style>
