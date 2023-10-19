<script>
export default {
    data(){
        return{
            text:"orange",
        }
    },
    methods: {
        emitGo(){
            //  我要往父元件傳遞訊息
            //  步驟1：告知父元件執行 apple(,左邊的值) 暗號給予紙條
            this.$emit("apple",this.text)
        }
    }
}
</script>

<template>
<div class="showArea">
    <h1>Emit child</h1>
    <p>text變數：{{this.text}}</p>
    <!--步驟2：兩種都可使用-->
    <!--<button type="button" @click="emitGo">emitGO</button>-->
    <button type="button" @click="$emit('apple',this.text)">emitGo</button>
</div>
</template>

<style lang="scss" scoped>
.showArea{
    background-color: aqua;
    width: 500px;
    height: 500px;
}
</style>
