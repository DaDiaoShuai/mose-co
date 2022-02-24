<script setup>
import lottie from "lottie-web";
import { onMounted } from "vue";

onMounted(() => {
  const _lottie = lottie.loadAnimation({
    container: document.getElementById("lottie_box"),
    renderer: "svg",
    loop: true,
    path: "https://assets1.lottiefiles.com/packages/lf20_dyiqnus5.json",
  });
});
</script>
<template>
  <div id="lottie_box">other</div>
</template>
