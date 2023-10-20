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
        emitshow(){
            this.$emit("get",this.info);
        },
    },
}
</script>

<template>
    <div class="show">
        <label for="">名字</label>
        <label for="">年齡</label>
        <button type="button" @click="emitshow">顯示資料於{}</button>
    </div>

</template>

<style lang="scss" scoped>

</style>
