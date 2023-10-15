<script>
//https://www.figma.com/file/KPNLAh5uMZU6iN3ckfx1CY/%E5%89%8D%E7%AB%AF%E7%B7%B4%E7%BF%921?node-id=0%3A1&mode=dev
//定義數列**arr1[需要數量]，使用v-for="item in *arr1*"
  export default{
    data(){
        return{
            arr1:[1,2,3]
        }
    }
}
</script>

<template>
<!--<h1>Home</h1>-->
<div class="pratice1">
<div class="top page"></div>
<div class="middle area">
  <div class="boxes page" v-for="item in arr1"></div>
  <!--<div class="boxes page"></div>
  <div class="boxes page"></div>-->
</div>
<div class="third area">
  <div class="leftbox"></div>
  <div class="rightText">
    <h2>Title</h2>
    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quibusdam! Velit laborum, officia eum odio dolore temporibus nihil illum repudiandae!</P>

  </div>
</div>
<div class="bottom page"></div>
</div>
</template>

<style lang="scss" scoped>

.pratice1{  
  margin: auto;
  width: 754px;
  border: 2px solid #86DDD3;
.page{
  background-color: #86DDD3;
}
.area{
  display: flex;
  justify-content: space-between;
}
.top{
  height: 191px;
}
.middle{
  margin: 39px;
  margin-top: 50px;
  height: 211px;
  .boxes{
  width: 211px;
  height: 211px;
}
}

.third{
  margin: 0%  ;
  margin-top: 67px;
  height: 333px;
  .leftbox{
    width: 377px;
    background-color: #86DDD3;
  }
  .rightText{
    margin: auto;
    width: 377px;
    padding-left: 63px;
  }
}

.bottom{
  margin-top: 91px;
  height: 86px;
}
}
</style>
