<script>
//https://www.figma.com/file/Pkn51cLShmznqIYYXt4c1g/%E5%89%8D%E7%AB%AF%E7%B7%B4%E7%BF%929---Expense-Tracker?type=design&node-id=0-1&mode=design&t=csKNN8PJiywovk2d-0
import {RouterLink} from 'vue-router'
export default {
    data() {
    return {
        plusNum: 0,
        neNum: 0,
        totalNum: 0,
        arr: []
    }
    },
    methods: {
    cool() {
        let obj = {
        name: "income",
        money: 100
        }

        let obj2 = {
        name: "expense",
        money: -50
        }
        this.arr.push(obj)
        this.arr.push(obj2)
        
    }
    }
}
</script>

<template>
    <div class="bgArea">
    <div class="blueArea">
        <p>Expense Tracker</p>
        <p>your balance</p>
        <h1>{{ totalNum }}</h1>
    </div>
    <div class="whiteArea">
        <div class="top">
        <div class="income Text">
            <p class="income">INCOME</p>
            <h1 class="plusNum">{{ plusNum }}</h1>
        </div>
        <div class="expense Text">
            <p class="expense">EXPENSE</p>
            <h1>{{ neNum }}</h1>
        </div> 
        </div>
        <div class="btn">
        <button type="button" class="numBtn" v-on:click="cool">Add transaction</button>
        </div>
        <div class="content">
        <div class="block" v-for="item in arr">
            <div class="items">
            <span>{{ item.name }}</span>
            <span>{{ item.money }}</span>
        </div>
            <button type="button" class="dltBtn">Delete</button>
        </div>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    border: 4px solid #3C7FA5;
    width: 100%;
    height: 100vh;
    display: flex;

    .blueArea {
    width: 40vw;
    height: 99vh;
    background-color: #3C7FA5;
    text-align: center;
    p{
        margin-top: 183px;
        color: white;
        font-size: 30pt
    }
    h1{
        color: white;
        font-size: 48px;
    }
    }

    .whiteArea {
    width: 60vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    .top{
        display: flex;
        .Text{
        //border: 2px solid black;
        text-align: center;
        width: 30vw;
        margin: auto;
        P{
            font-size: 36pt;
        }
        } 
        .income{
        color: #70A53C;
        }
        .expense{
        color: #A53C42;
        }
    }
    .numBtn{
        border-radius: 10px;
        margin-top: 91px;
        margin-bottom: 53px;
        width: 198px;
        height: 41px;
        color: white;
        background-color: #3C7FA5;
        border: 0;
    }
    .content{
        width:500px ;
        height: 40vh;
        
        .block{
        margin-top: 15px;
        border: 2px solid #3C7FA5;
        border-radius: 10px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24pt;
        }
        .items{
        margin: 0 35px;
        width: 400px;
        display: flex;
        justify-content: space-between;
        color: #3C7FA5;
        }
        .dltBtn{
        margin-right: 18px;
        width: 60px;
        height: 29px;
        background-color: #A1B9C7;
        border: 0;
        border-radius: 10px;
        color: white;
        font-size: 10pt;
        } 
    }
    }

}
</style>
