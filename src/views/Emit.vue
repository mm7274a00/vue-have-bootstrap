<script>
import child2 from "../components/child2.vue";
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
            console.log(params)
            this.childText = params
        }
    }
}
</script>

<template>
    <h1>Emit</h1>
    <p>。 可簡易理解為新年給紅包習俗：到了新年(定義方法)、新年快樂(暗號)、紅包(紙條/值)、console.log複印其值</p>
    {{ this.childText }}
<div class="show">
    <!--步驟3：告知子元件，想要父元件做什麼事就傳遞 apple-->
    <child2 @apple="emitObj"/>

</div>
</template>

<style lang="scss" scoped>
.show{
    background-color: aqua;
    width: 500px;
    height: 500px;
}
</style>
