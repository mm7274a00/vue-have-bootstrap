<script>
export default {
    props:[
    //"person",
    //"sign",
    "signInfo"
    ]
}
</script>

<template>
    <div class="textShow">
        <!--{{ this.person }}-->
        {{ this.name }}
        <label for="">姓名</label>
        <!--<input type="text" v-model="sign.name">-->
        <!--emit-->
    </div>
</template>

<style lang="scss" scoped>
.textShow{
    width: 600px;
    height: 600px;
    border: 1px solid black;
}

</style>
