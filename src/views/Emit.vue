<script>
import child2 from "../components/child2.vue";
import { mapState, mapActions } from 'pinia';
import indexState from '../../stores/indexState';
export default{
    data(){
        return{
            childText:"",
        }
    },
    components:{
        child2
    },
    methods:{
        //步驟4：複印值並顯示
        emitObj(params){
            console.log(params)//顯示於F12主控台
            this.childText = params
        },        
        ...mapActions(indexState,["setLocation"])
    },
    mounted(){
        this.setLocation(3)
    }
}
</script>

<template>
    <h1>Emit</h1>
    <p>。 子傳父，宣告方法*emitGo*，建立button @click="emitGo"，按下按鈕則執行("get",this.變數)，並推送資料至info{}</p>
    <p>。 可簡易理解為新年給紅包習俗：到了新年(定義方法)、新年快樂(暗號)、紅包(紙條/值)、console.log複印其值(非必要)</p>
    {{ this.childText }}
<div class="show">
    <!--步驟3：告知子元件，想要父元件做什麼事就傳遞 apple-->
    <child2 @apple="emitObj"/>

</div>
</template>

<style lang="scss" scoped>
.show{
    background-color: rgb(185, 215, 248);
    width: 500px;
    height: 500px;
}
</style>
