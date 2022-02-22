<script setup>
import { ref } from "vue";
import { useKeenSlider } from "keen-slider/vue";

const autoplay = (slider) => {
  let timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

const [container, slider] = useKeenSlider({ loop: true }, [
  autoplay,
]);
// const banners = new Array(5).fill(null).map((el, idx) => ({
//   // banner: `<img src="@/assets/imgs/banner_${idx + 1}.png" alt="banner" />`,
//   banner: import(`@/assets/imgs/banner_${idx + 1}.png`),
// }));
</script>
<template>
  <section>
    <div ref="container" class="keen-slider">
      <div class="keen-slider__slide number-slide1">
        <img src="@/assets/imgs/banner_1.png" alt="" class="object-fill w-full h-full" />
      </div>
      <div class="keen-slider__slide number-slide1">
        <img src="@/assets/imgs/banner_2.png" alt="" class="object-fill w-full h-full" />
      </div>
      <div class="keen-slider__slide number-slide1">
        <img src="@/assets/imgs/banner_3.png" alt="" class="object-fill w-full h-full" />
      </div>
      <div class="keen-slider__slide number-slide1">
        <img src="@/assets/imgs/banner_4.png" alt="" class="object-fill w-full h-full" />
      </div>
      <div class="keen-slider__slide number-slide1">
        <img src="@/assets/imgs/banner_5.png" alt="" class="object-fill w-full h-full" />
      </div>
    </div>
  </section>
</template>
<style>
@import url("keen-slider/keen-slider.css");
</style>
