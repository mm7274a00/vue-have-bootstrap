<script>
import { mapState, mapActions } from 'pinia';
import indexState from '../../stores/indexState';
export default{
    methods:{
        ...mapActions(indexState,["setLocation"])
    },
    //生命週期
    mounted(){
        this.setLocation(2)
    }
}
</script>

<template>
<h1>Pinia</h1>
<p>。 在Pinia建立的變數僅能於Pinia做更改（資料整合及安全性問題），Vue中只能讀</p>
<p>。本次使用header建立，於pinia.vue及Emit.vue進行測試</p>
<br>

<h4>基本使用</h4>
<p>。安裝並設定完pinia，於indexState.js設定資料庫及內容即可於Vue的各分頁中匯入</p>
<p>。如indexState.js宣告location =1，而Header取用資料庫及變數location並使顯示，則會顯示變數1（參考右下框）</p>
<br>

<h4>配合生命週期</h4>    
<p>。添加 mounted(){this.setLocation(2)}，則location值顯示為2</p>
<p>。Header中設定:class="{'cass' : this.location === 2} ，背景顏色顯示為黑色，Emit則設定為3，即可達到標示當前頁的功能（如左側的Emit及Pinia）</p>
</template>

<style lang="scss" scoped>


</style>
