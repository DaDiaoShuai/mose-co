<script setup>
import { ref } from "vue";
import { useKeenSlider } from "keen-slider/vue";
import { autoplay } from "@/plugins/keenSlider";

const [container, slider] = useKeenSlider({ loop: true }, [autoplay]);

const modules = import.meta.globEager("/src/assets/imgs/banner_*.png");

const banners = Object.values(modules);
</script>
<template>
  <div ref="container" class="keen-slider">
    <div
      class="keen-slider__slide h-[442px]"
      v-for="(banner, idx) of banners"
      :key="idx"
    >
      <img :src="banner.default" alt="" class="object-fill w-full h-full" />
    </div>
    <!-- <div class="keen-slider__slide number-slide1">
        <img
          src="@/assets/imgs/banner_2.png"
          alt=""
          class="object-fill w-full h-full"
        />
      </div>
      <div class="keen-slider__slide number-slide1">
        <img
          src="@/assets/imgs/banner_3.png"
          alt=""
          class="object-fill w-full h-full"
        />
      </div>
      <div class="keen-slider__slide number-slide1">
        <img
          src="@/assets/imgs/banner_4.png"
          alt=""
          class="object-fill w-full h-full"
        />
      </div>
      <div class="keen-slider__slide number-slide1">
        <img
          src="@/assets/imgs/banner_5.png"
          alt=""
          class="object-fill w-full h-full"
        />
      </div> -->
  </div>
</template>
<style scoped>
@import url("keen-slider/keen-slider.css");
</style>
