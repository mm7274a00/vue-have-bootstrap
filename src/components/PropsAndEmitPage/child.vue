<script>
export default {
    props:[
    //"person",
    //"sign",
    "signInfo",
    "name"
    ]
}
</script>

<template>
    <div class="textShow">
        <h3>Child</h3>
        <!--{{ this.person }}-->
        {{ this.name }}
        <label for="">姓名</label>
        <p>111</p>
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
