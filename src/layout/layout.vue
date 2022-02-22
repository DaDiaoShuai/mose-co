<script setup>
import NavBar from "./Head&Footer/nav.vue";
import FootBar from "./Head&Footer/foot.vue";
import HBg from "@/assets/imgs/header-bg.avif";
import HBg2 from "@/assets/imgs/header-bg-duplicate.avif";
import BgHeader from "./Head&Footer/bg-header.vue";
</script>
<template>
  <BgHeader />
  <NavBar></NavBar>
  <main
    class="flex-1  container mx-auto pl-2 text-primary transition-all duration-1000"
  >
    <router-view></router-view>
  </main>
  <FootBar></FootBar>
</template>
<style lang="stylus" scoped></style>
