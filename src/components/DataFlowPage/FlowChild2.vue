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
    <p>名字是：{{ this.name }}</p>
    <p>年齡是：{{ this.age }}</p>
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
