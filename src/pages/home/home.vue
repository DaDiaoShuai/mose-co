<script setup>
import Slider from "@/components/Slider.vue";
import { HOME_SLOGAN as slogans } from "@/config";
import lottie from "lottie-web";
import { onMounted } from "vue";

onMounted(() => {
  // const _lottie = lottie.loadAnimation({
  //   container: document.getElementById("lottie_box"),
  //   renderer: "svg",
  //   loop: true,
  //   path: "https://assets1.lottiefiles.com/packages/lf20_dyiqnus5.json",
  // });
  slogans.forEach((el, idx) => {
    lottie.loadAnimation({
      container: document.getElementById("lottie_box" + idx),
      renderer: "svg",
      loop: true,
      path: el.path,
    });
  });
});
</script>
<template>
  <div class="home">
    <section>
      <Slider />
    </section>
    <section>
      <div class="flex justify-between mt-5">
        <div
          class="relative rounded-md px-6 py-4 pr-44 bg-pink-50/20 flex-1 mr-4 last:mr-0 shadow-md hover:shadow-xl hover:shadow-black/10 transition-all duration-700"
          v-for="({ title, slogan, bg }, i) of slogans"
        >
          <h1 class="text-2xl font-medium">{{ title }}</h1>
          <p class="text-sm mt-2 italic">{{ slogan }}</p>
          <p
            :id="'lottie_box' + i"
            class="absolute right-2 top-0 bottom-0 mx-0 my-auto w-40"
          ></p>
        </div>
      </div>
    </section>
    <section class="ms-card">
      <h1 class="text-3xl">公司简介</h1>
      <p class="mt-5 text-base">
        摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司
      </p>
    </section>
    <section class="ms-card">
      <h1 class="text-3xl">特色美食</h1>
      <p class="mt-5 text-base">
        摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司
      </p>
    </section>
    <section class="ms-card">
      <h1 class="text-3xl">摩西资讯</h1>
      <p class="mt-5 text-base">
        摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司
      </p>
    </section>
    <section class="ms-card">
      <h1 class="text-3xl">摩西社区</h1>
      <p class="mt-5 text-base">
        摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司
      </p>
    </section>
    <section class="ms-card">
      <h1 class="text-3xl">摩西周边</h1>
      <p class="mt-5 text-base">
        摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司
      </p>
    </section>
    <section class="ms-card">
      <h1 class="text-3xl">摩西俱乐部</h1>
      <p class="mt-5 text-base">
        摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司摩西餐饮有限公司
      </p>
    </section>
  </div>
</template>
<style lang="stylus" scoped>
.ms-card
  @apply mt-10 px-5 py-10 rounded-md shadow-md bg-pink-50/20 transition-all
  &:hover
   @apply shadow-lg
</style>
