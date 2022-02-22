<script setup>
import { ref, onMounted } from "vue";
import Child from "./son.vue";

const son = ref(null);
const parentData = ref("Hello, World");
const sonData = ref("");

const tap = (data) => {
  console.log("emit====>", data);
  console.log("ref===>", son.value.text);
  parentData.value = data;
};

onMounted(() => {
  sonData.value = son.value.text;
});
</script>
<template>
  <div class="break-all">
    <!-- <span>about</span> -->
    <h1>{{ parentData }}</h1>
    <h1>{{ sonData }}</h1>

    <Child @tap="tap" ref="son" :data="parentData" />
  </div>
</template>
