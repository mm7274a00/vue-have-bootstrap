<script>
export default {
    data(){
        return{
            text:"apple",
        }
    },
    methods: {
        emitGo(){
            //  我要往父元件傳遞訊息
            //  告知父元件執行 apple(,左邊的值) 暗號給予紙條
            this.$emit("apple",this.text)
        }
    }
}
</script>

<template>
<div class="showArea">
    <h1>Emit child</h1>
    <p>text變數：{{this.text}}</p>
    <button type="button" @click="emitGo">emitGO</button>
</div>
</template>

<style lang="scss" scoped>
.Area{
    background-color: aqua;
    width: 500px;
    height: 500px;
}
</style>
