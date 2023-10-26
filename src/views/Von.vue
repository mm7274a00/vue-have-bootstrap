<script>
export default{
    //data : function(){}
    // ES6 語法糖
    data(){
        return{
            title:"cool",
            text:""
        }
    },
    methods:{
        print(){
        console.log(this.title)
    },
    sky(){
        console.log("sky")
    },
    write(){
        console.log(this.text)
    }
    }
}
</script>

<template>
    <h1>v-on</h1>
    <p>。data（）   使用語法糖進行縮短編輯，也是一個function</p>
    <p>。每個fuction有獨立的this屬性，如下面的方法要使用上面的變數，則需添加this（this.變數）</p>
    <br>
    <h4>範例1</h4>
    <!-- <button type="button" v-on:click="print()">btn</button> -->
    <button type="button" @click="print()">btn</button> 
    - 點擊按鈕執行print() -> console.log 出 cool
    <br>
    <br>

    <h4>範例2</h4>
    <select name="" id="" @change="sky()">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    - 更換選項執行sky（）-> console.log 出 sky
    <br>
    <br>
    
    <h4>範例3</h4>
    <input type="text" v-model="this.text">
    <button type="button" @click="write()">write</button> - 列印出輸入的內容
</template>

<style lang="scss" scoped>
</style>
