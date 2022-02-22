<script setup>
import HBg from "@/assets/imgs/header-bg.avif";
import HBg2 from "@/assets/imgs/header-bg-duplicate.avif";
</script>
<template>
  <div
    class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none"
  >
    <div class="w-[108rem] flex-none flex justify-end">
      <picture>
        <source :srcset="HBg" />
        <img
          :src="HBg"
          alt="hbg"
          class="w-[71.75rem] flex-none max-w-none dark:hidden"
        />
      </picture>
      <picture>
        <source :srcset="HBg2" />
        <img
          :src="HBg2"
          alt="hbg"
          class="w-[90rem] flex-none max-w-none hidden dark:block"
        />
      </picture>
    </div>
  </div>
</template>
