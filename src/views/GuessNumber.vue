<script>
export default{
    data(){
        return{
        }
    },
    methods:{
        print(){ //print : function(){}
        const ansNum =document.getElementById("ansNum");
        
        console.log(ansNum.value)
        console.dir(ansNum)
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
    <div class="practice3">
        <div class="game Area">
            <div class="text Area">
                <h3 id="guessText">猜一個數字</h3>
                <div class="Num Area">
                    <h1 id="MinNum">1</h1>
                    <h1>　-　</h1>
                    <h1 id="MaxNum">100</h1>
                </div>
                <input type="number" id="ansInput" class="ansInput">
                <button type="button" id="ansBtn" class="ansBtn" @click="print()">回答</button>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
.practice3{
    margin: auto;
    padding-top: 40px;
    width: 853px;
    height: 471px;
    background-color: #868686;
    
    }
.Area{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.game{
    border-radius: 10px;
    width: 302px;
    height: 338px;
    background-color: white;
}
.text{
    flex-direction: column;
}
.ansInput{
    width: 144px;
    height: 27px;
    border: 2px solid #959595;
    border-radius: 5px;
}
.ansBtn{
    margin-top: 21px;
    width: 82px;
    height: 30px;
    background-color: #959595;
    border-radius: 5px;
    border: 0;
    color: white;
    &:active{
        background-color: black;}

}

</style>
