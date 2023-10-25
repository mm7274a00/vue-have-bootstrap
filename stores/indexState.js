import { defineStore } from "pinia";

//  輸入兩個參數。1.自建資料庫名稱 2.資料庫內容
export default defineStore("indexState",{
    //  與Vue的預設匯出概念相同，只是寫法不同
    //  data
    state:() =>({
        location :1
    }),
    //  computed，沒有this，本身能當變數
    getters:{
        //  locationInfo:(state) => {`現在位置$(state.location)`}
        locationInfo(state){
            return `現在位置${state.location}`
        }
    },
    //methods
    actions:{
        getLocation(){
            console.log(this.location);
        },
        setLocation(num){
            this.location = num ;
        }
    }
})