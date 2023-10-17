<script>
export default {
        data(){
            return{
                FallArr:[
                "../../public/甜點圖片/5.png",
                "../../public/甜點圖片/6.png",
                "../../public/甜點圖片/7.png",
                "../../public/甜點圖片/4.png",
                "../../public/甜點圖片/3.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bMuSG0edizK6McWO1_TtmoWmiFHzXnS8tg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpUlSkgs7pb6iWNg2Q4bmITIPOzj9uBa23QU6UecMPoBIN3fvWIgxThzkcX3sggSBT78&usqp=CAU",
                "https://officialchailease.blob.core.windows.net/public/zingala/2023/07/26/bcdee8ca-ffe9-4920-b632-1f5cc49528e5/b82f3f42-48d8-44bf-8e74-bb79105625b5.jpg",
                "https://www.arfarf.tw/wp-content/uploads/10%E4%BB%B6%E4%BA%8B-1024x677.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qgVmfGSAWrXDrroc3ddr0CatDtkU2F0HT_IqNTuxMQrT283UjYBRZ_Ttac9-S_FUcIU&usqp=CAU"
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
            <a class="nav-link build" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
    <img :src="item" alt="" style="width: 20vw ;height: auto ;border-radius: 15px;"></div>
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
.nav-link{
    display: flex;
    justify-content: center;
    width: 60px;
    height: 40px;
}
.home{
    background-color: black;
    border-radius: 10px;
    p{
        color: white;
    }
}
.search{
    border: 0px solid black;
    width: 1050px;
    border-radius: 10px;
    background-color: rgb(225, 225, 225);
    
}
.fallArea{
    column-count: 4;
    width: auto;
    //background-color: bisque;
    .fallImg{
    margin-bottom: 30px;
    display: flex;
    vertical-align: top;
    justify-content: center;
    //border: 5px solid rgb(224, 125, 125);
}
}

</style>
