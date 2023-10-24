<script>
//https://www.figma.com/file/Pkn51cLShmznqIYYXt4c1g/%E5%89%8D%E7%AB%AF%E7%B7%B4%E7%BF%929---Expense-Tracker?type=design&node-id=0-1&mode=design&t=csKNN8PJiywovk2d-0

export default {
    data() {
        return {
            plusNum: 0,
            neNum: 0,
            totalNum: 0,
            arr: [],
            add: {
                id:"id",
                text:"",
                money:"",
            }
        }
    },
    methods: {
        cool() {
            let obj = {
            name: this.add.text,
            money: this.add.money,
            };

            // let obj2 = {
            //     name: this.add.text,
            //     money: this.add.money,
            // };

            this.arr.push(obj);
            //this.arr.push(obj2);

            //更新所有金額數值
            this.totalNum = this.Total();
            this.plusNum = this.Income();
            this.neNum = this.Expense();
            },

        addGo() {
            
            this.arr.push({
            name: this.add.text,
            money: this.add.money,
            })
            },

        Total() {
        //累計輸入值
        return this.arr.reduce((total, item) => total + item.money, 0);
            },

        //如輸入金額 > 0，歸類至Income
        Income() {
            return this.arr.filter(item => item.money > 0)
            .reduce((total, item) => total + item.money, 0);
            },
        
        //如輸入金額 < 0，歸類至Expense
        Expense() {
            return this.arr.filter(item => item.money < 0)
            .reduce((total, item) => total + item.money, 0);
            },
            
        dltGo(){
            //刪除該id的數值
            this.arr.splice(id,1);
            //更新所有金額的數值
            this.totalNum = this.Total();
            this.plusNum = this.Income();
            this.neNum = this.Expense();
        },
    }
}
</script>

<template>
    <div class="bgArea">

    <div class="blueArea">
        <p>Expense Tracker</p>
        <p>your balance</p>
        <h1>{{  "$"+totalNum }}</h1>
    </div>
    <div class="whiteArea">
        <div class="top">
        <div class="income Text">
            <p class="income">INCOME</p>
            <h1 class="plusNum">{{  "$"+ plusNum }}</h1>
        </div>
        <div class="expense Text">
            <p class="expense">EXPENSE</p>
            <h1>{{ "$"+neNum }}</h1>
        </div> 
        </div>

        <!-- 使用Bootstrap元件建立彈出互動視窗 -->
        <div class="AddArea">
            <button type="button" class="AddBtn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add transaction</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
        <div class="modal-body">
        <form>
            <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Text</label>
            <input type="text" class="form-control" id="text" v-model="add.text">
            <!-- {{ add.text }} -->
            </div>
            <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Amount</label>
            <input type="number" class="form-control" id="money" v-model.trim="add.money">
            <!-- {{ add.money }} -->
            </div>
        </form>
        </div>
        <div class="modal-footer">
        <button type="button" class="numBtn" @click="cool">Send message</button>
        </div>
    </div>
    </div>
            </div>
        </div>
        
    <div class="content">
        <div class="block" v-for="(item,id) in arr" id="id">
            <div class="items">
                <span>{{ id + 1 +". "}}{{ item.name }}</span>
                <span>{{ item.money }}</span>
            </div>

            <!-- 使用Bootstrap元件建立彈出互動視窗 -->
            <div class="dltArea">
                <button type="button" class="dltBtn" data-bs-toggle="modal" data-bs-target="#dltexampleModal"><p>Delete</p></button>
                <div class="modal fade" id="dltexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Sure to Delete?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" @click="dltGo(money)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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
    .AddBtn{
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
        display: flex;
        align-items: center;
        border-radius: 10px;
        p{
            margin: auto;
            color: white;
            font-size: 10pt;
        }
        } 
    }
    }

}
</style>
