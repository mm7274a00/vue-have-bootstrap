<script>
export default{
    data(){
        return{
            point:0,
            ntd: 0,
        }
    },
    methods:{
        addPoint(){
            this.point += 1;}
    },
    watch:{
        point(){
            this.ntd = this.point *10;
        }
    },
    computed:{
        jpy(){
            return this.ntd *4.63;
        }
    },
    beforeCreate(){
        console.log("beforeCreate"+this.point)
    },
    created(){
        console.log("created"+this.point)
    },
    beforeMount(){
        console.log("beforeMount"+this.point)
    },
    mounted(){
        console.log("mounted"+this.point)
    },
    beforeUpdate(){
        console.log("beforeUpdate"+this.point)
    },
    updated(){
        console.log("updated"+this.point)
    },
    beforeUnmount(){
        console.log("beforeUnmount"+this.point)
    },
    unmounted(){
        console.log("unmounted"+this.point)
    },
}
</script>

<template>
<h1>Watch & Computed、生命週期、MVVM(額外)</h1>
<br>
<h4>Watch</h4>
    <p>。監聽指定變數的"實際"值，並做出方法</p>
    <p>EX：點擊circle使point的值+1、Watch監聽到point的值變動並執行point()</p>
<br>

<h4>Computed</h4>
    <p>。監聽指定變數的"暫存"值，並做出方法</p>
    <p>。Computed方法必須包含return</p>
    <p>EX：Computed 監聽到 ntd 的值變動並執行 jpy( ){return}</p>
    <br>

    <p>Point : {{ this.point }}</p>
    <p>ntd : {{ this.ntd }}</p>
    <p>jpy : {{ this.jpy }}</p>
    <div class="circle" @click="addPoint()">
    </div>

    <h1 v-if="this.point == 10">100</h1>
    <p>當 point 的值 =10，顯示 100 </p>

    <br>
<h4>生命週期</h4>
    <p>。這裡以 console.log 於主控台演示</p>
    <p>。點擊circle 更新 this.point，beforeUpdate、updated的值會跟著變動</p>
    <p>。切到其他分頁：beforeUnmount、unmounted(數值跟著切畫面前this.point)</p>
    <p>。切回則重置：beforeCreateundefined、created、beforeMount、mounted</p>
    <p>。概念可參考<a href="https://book.vue.tw/CH1/1-7-lifecycle.html">前輩網站</a></p>
    <br>

<h4>MVVM</h4>
。<a href="https://dreambo4.github.io/2021/10/07/Android-APP-01-%E6%9E%B6%E6%A7%8B%E4%BB%8B%E7%B4%B9-MVVM/">架構說明參考網站</a>
</template>

<style lang="scss" scoped>
.circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(148, 207, 207);
    cursor: pointer;//改變滑鼠游標

    &:hover{
        scale: 1.05;
    }
}


</style>
