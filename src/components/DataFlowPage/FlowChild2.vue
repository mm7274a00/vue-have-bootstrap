<script>
export default {
    data(){
        return{
        
        }
    },
    props:[
        "name",
        "age",
    ],
    methods: {
        
    }
}
</script>

<template>
<div class="show">
    <p>Flowchild2</p>
    <p>名字是：{{ this.name }}</p>
    <p>年齡是：{{ this.age }}</p>

    <!--<input type="text" name="" id="" :value="age" @input="$emit(`update:age`,$event.target.value)">
    <button type="button" @click="console.log($event)">資料</button>-->
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
