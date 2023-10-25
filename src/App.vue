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
  padding-bottom: 5%;
}
.viewsPage{
  margin-left: 180px;
}
</style>
