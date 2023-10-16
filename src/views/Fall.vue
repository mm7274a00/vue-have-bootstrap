<script>
export default {
        data(){
            return{
                FallArr:[
                "../../public/甜點圖片/2.png",
                "../../public/甜點圖片/3.png",
                "../../public/甜點圖片/5.png",
                "../../public/甜點圖片/6.png",
                "../../public/甜點圖片/7.png",
                "../../public/甜點圖片/4.png",
                ],
            
            }
        }
}
</script>

<template>
    <div class="fallHeader">
        <nav class="navbar navbar-expand-lg navbar-light bg-light header">
        <div class="container-fluid">
        <img src="../../public/甜點圖片/Group 10.png" alt="" class="fallIcon">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active home" aria-current="page" href="#"><p>首頁</p></a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            建立
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        </ul>
        <form class="d-flex">
        <input class="search form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </div>
</nav>
        </div>
    <div class="fallArea">
    <div class="fallImg" v-for="item in FallArr">
    <img :src="item" alt=""></div>
    </div>
</template>

<style lang="scss" scoped>

.header{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin-bottom: 40px;
}
.fallIcon{
    //border: 2px solid black;
    margin-right: 20px;
}
.home{
    background-color: black;
    border-radius: 10px;
    width: 60px;
    text-align: center;
    p{
        color: white;
    }
}
.search{
    border: 0px solid black;
    width: 1050px;
    border-radius: 10px;
    background-color: rgb(176, 176, 176);
    
}
.fallArea{
    display: flex;
    flex-wrap: wrap;
    column-count: 3 ;
    column-gap: 20px 20px;
    break-inside: auto;
    height: 150vh;
    width: 90vw;
    background-color: bisque;
    .fallImg{
    margin: 10px 10px
}
}

</style>
