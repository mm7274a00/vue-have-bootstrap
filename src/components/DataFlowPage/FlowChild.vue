<script>
export default{
    data(){
        return{
            info:{
                name:"",
                age:10,
            }
        }
    },
    methods:{
        emitGo(){
            this.$emit("get",this.info)
        },
    }
}
</script>

<template>
    <div class="show">
        <label for="">名字</label>
        <input type="text" {{ this.name }}>
        <label for="">年齡</label>
        <input type="number" {{ this.age }}>
        <button type="button" @click="emitGo">顯示資料於{}</button>
    </div>

</template>

<style lang="scss" scoped>
.show{
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
}

</style>
