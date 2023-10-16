<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"
</script>

<template>
  <div class="fullpage">
  <Header /> 
  <div class="viewsPage">
  <RouterView />
</div>
</div>
</template>

<style lang="scss" scoped>
.fullpage{
  padding: 0 50px;
  padding-bottom: 20px;
  border: 5px solid rgb(163, 198, 226);;
}
</style>
