<script>
import { RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia';
import indexState from '../../stores/indexState';

export default {
    components:{
        RouterLink,
    },
    computed:{
        //  參數：1. 資料庫 2.要取用的 state & getters
        ...mapState(indexState, ["location", "locationInfo"])
    },
    methods:{
        ...mapActions(indexState, ["getLocation","setLoctaion"])
        }
    }

</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="headerShow">
    <a class="home link" href="/">
        <i class="fa-solid fa-house"></i>
    </a>

    <RouterLink to="/VueAll" class="VueAll link">Vue語法</RouterLink>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="practice link dropdown-toggle" href="/VueUse" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vue語法
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="down vfor" href="/Vfor">V for</a></li>
            <li><a class="down von" href="/Von">V on</a></li>
            <li><a class="down vTextAndVModel" href="/VtextAndVModel">V text & V Model</a></li>
            <li><a class="down vbind" href="/Vbind">V bind</a></li>
            <li><a class="down VifAndVshow" href="/VifAndVshow">V if &V show</a></li>
            <RouterLink to="/WatchAndComputed" class="down VifAndVshow">Watch & Computed</RouterLink>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="practice link dropdown-toggle" href="" id="practice" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            練習
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" @click="">
            <li><a class="down practice green1" href="/Green1">前端練習1</a></li>
            <li><a class="down practice green1" href="/Green2">前端練習1(2)</a></li>
            <li><a class="down practice guessNumber link2" href="/GuessNumber">猜數字</a></li>
            <li><a class="down practice ExpenseTracker link2" href="/ExpenseTracker">記帳程式</a></li>
            <li><a class="down practice sweet" href="/Sweet">甜點</a></li>
            <li><a class="down fall" href="/Fall">瀑布流</a></li>
            </ul>
            </li>

            <li class="nav-item">
            <a class="nav link active" aria-current="page" href="/HW/HwHome">房地產</a>
            </li>
            <li class="nav-item">
            <a class="nav link active" aria-current="page" href="/VueRouter">VueRouter</a>
            </li>
            <li class="nav-item">
            <a class="nav link active" aria-current="page" href="/Props">Props</a>
            </li>
            <RouterLink to="/Emit" class="Emit link" :class="{'cass' : this.location === 3}">Emit</RouterLink>

            <RouterLink to="/DataFlow" class="DataFlow link">DataFlow</RouterLink>
            <RouterLink to="/ProvideAndInject" class="ProvideAndInject link">Provide & Inject</RouterLink>
            <RouterLink to="/Pinia" class="Pinia link" :class="{'cass' : this.location === 2}">Pinia</RouterLink>
            <li class="nav-item dropdown">
            <a class="practice link dropdown-toggle" href="/ExpenseTracker" id="practice" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            記帳
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="down practice ET" href="/ExpenseTracker">記帳</a></li>
            <li><a class="down practice ET" href="/ETLogin">Login</a></li>
            </ul>
            </li>
            </ul>
    </div>
    </div>
</nav>

<div class="navLeft">
  
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h1 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Vue語法</button>
      </h1>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <a button type="button" class="vueBtn" href="/DataFlow">DataFlow</a>
        <a button type="button" class="vueBtn" href="/Emit">Emit  </a>
        <a button type="button" class="vueBtn" href="/Pinia">Pinia</a>
        <a button type="button" class="vueBtn" href="/Props">Props</a>
        <a button type="button" class="vueBtn" href="/ProvideAndInject">Provide & Inject</a>
        <a button type="button" class="vueBtn" href="/Vbind">V bind</a>
        <a button type="button" class="vueBtn" href="/VFor">V for</a>
        <a button type="button" class="vueBtn" href="/Von">V on</a>
        <a button type="button" class="vueBtn" href="/VtextAndVModel">V text & V Model</a>
        <a button type="button" class="vueBtn" href="/VifAndVshow">V if & V show</a>
        <a button type="button" class="vueBtn" href="/VueRouter">VueRouter</a>
        <a button type="button" class="vueBtn" href="/WatchAndComputed">Watch & Computed</a>
        </div>
          </div>
        </div>
    </div>
    <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h1 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Vue語法</button>
      </h1>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <a button type="button" class="vueBtn" href="/DataFlow">DataFlow</a>
        <a button type="button" class="vueBtn" href="/Emit">Emit  </a>
        <a button type="button" class="vueBtn" href="/Pinia">Pinia</a>
        <a button type="button" class="vueBtn" href="/Props">Props</a>
        <a button type="button" class="vueBtn" href="/ProvideAndInject">Provide & Inject</a>
        <a button type="button" class="vueBtn" href="/Vbind">V bind</a>
        <a button type="button" class="vueBtn" href="/VFor">V for</a>
        <a button type="button" class="vueBtn" href="/Von">V on</a>
        <a button type="button" class="vueBtn" href="/VtextAndVModel">V text & V Model</a>
        <a button type="button" class="vueBtn" href="/VifAndVshow">V if & V show</a>
        <a button type="button" class="vueBtn" href="/VueRouter">VueRouter</a>
        <a button type="button" class="vueBtn" href="/WatchAndComputed">Watch & Computed</a>
        </div>
          </div>
        </div>
    </div>
  </div>

<div class="pinia">
    <p>pinia in Header</p>
    <p>{{ location }}</p>
    <p>{{ locationInfo }}</p>
    
</div>


<!--<div class="headerShow">
    <RouterLink to="/" class="home link">Home</RouterLink>
    <RouterLink to="/Vtext" class="Vtext link">Vtext</RouterLink>
    <RouterLink to="/GuessNumber" class="GuessNumber link">GuessNumber</RouterLink>
    <RouterLink to="/Sweet" class="Sweet link">Sweet</RouterLink>
    <RouterLink to="/Vbind" class="Vbind link">Vbind</RouterLink>
</div>-->

</template>

<style lang="scss" scoped>
.navLeft{
    position: absolute;
    position: fixed;
    margin-left: -55px;
    margin-top: -35px;
    height: 100vh;
    width: 190px;
    background-color: rgb(241, 241, 241);
    .vueBtn{
    margin-left: -20px;
    margin-bottom: 5px;
    padding-left: 20px;
    padding-top: 8px;
    font-size: 12pt;
    width: 190px;
    height: 40px;
    text-decoration: none;
    background-color: rgb(155, 167, 192);
    color: white;
}
}
.headerShow{
    position: fixed;
    z-index: 2;
    margin: -50px;
    margin-top: -20px;
    margin-bottom: 20px;
    width: 150%;
    height: 70px;
    background-color: rgb(163, 198, 226);
    display: flex;
    .link{
        // border: 2px solid black;
        margin: auto 20px;
        font-size: 20pt;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        text-decoration:none ;
        color: white;
        &:hover{
            color: rgb(13, 91, 154);
        }
    }
}
.fa-house{
    font-size: 30pt;
    color: rgb(255, 255, 255);
    &:hover{
            color: rgb(13, 91, 154);
        }
    }
.dropdown-menu{
    padding: 5px;
    background-color: rgb(245, 245, 245);
    color: rgb(163, 198, 226);
    .down{
        width: 100px;
        //border: 2px solid black;
        color: rgb(92, 151, 199);
        text-decoration:none ;
        &:hover{
            background-color: rgb(163, 198, 226);
            color: white;
    }
}
}
.navbar{
    height: 100px;
}
.pinia{
    z-index: 1;
    position: fixed;
    right: 0;
    bottom: 0;
    // margin-top: 500px;
    width: 110px;
    height: 140px;
    border: 2px solid black;
    background-color: white;
    padding: 10px;
    p{
        font-size: 10pt;
    }
}
.cass{
    background-color: rgb(242, 184, 184);
    border-radius: 10px;
}


</style>