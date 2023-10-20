<script>
export default{
    data(){
        return{
            info:{
                name:"",
                age:"",
            }
        }
    },
    methods:{
        emitGo(){
            this.$emit("get",this.info);
        },
    },
}
</script>

<template>
    <div class="show">
        <p>Flowchild</p>
        <p>。第一次輸入需點擊buttom，資料才會顯示</p>
        <label for="">名字</label>
        <input type="text" v-model="info.name">
        <label for="">年齡</label>
        <input type="number" v-model="info.age">
        <button type="button" @click="emitGo">顯示資料於{}</button>
    </div>

</template>

<style lang="scss" scoped>
.show{
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    input{
        width: 200px;
    }
    button{
        width: 200px;
    }
}
</style>
