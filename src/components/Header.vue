<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="headerShow">
    <a class="home link" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav link active" aria-current="page" href="/Vtext">課程內容</a>
        </li>
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
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="practice link dropdown-toggle" href="" id="practice" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            練習
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="down practice green1" href="/Green1">前端練習1</a></li>
            <li><a class="down practice green1" href="/Green2">前端練習1(2)</a></li>
            <li><a class="down practice guessNumber link2" href="/GuessNumber">猜數字</a></li>
            <li><a class="down practice sweet" href="/Sweet">甜點</a></li>
            <li><a class="down fall" href="/Fall">瀑布流</a></li>

            </ul>
        </li>
        </ul>
    </div>
    </div>
</nav>

<!--<div class="headerShow">
    <RouterLink to="/" class="home link">Home</RouterLink>
    <RouterLink to="/Vtext" class="Vtext link">Vtext</RouterLink>
    <RouterLink to="/GuessNumber" class="GuessNumber link">GuessNumber</RouterLink>
    <RouterLink to="/Sweet" class="Sweet link">Sweet</RouterLink>
    <RouterLink to="/Vbind" class="Vbind link">Vbind</RouterLink>
</div>-->

</template>

<style lang="scss" scoped>
.headerShow{
    margin: -50px;
    margin-top: -10px;
    margin-bottom: 20px;
    width: 150%;
    height: 70px;
    background-color: rgb(163, 198, 226);
    display: flex;
    .link{
        //border: 2px solid black;
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
</style>