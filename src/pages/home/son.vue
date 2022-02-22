<script setup>
import { ref } from "vue";
const props = defineProps({
  text: String,
});

const child = ref("child word");
const inexpose = ref("inexpose");
defineExpose({
  child,
  inexpose,
});

const emit = defineEmits(["tap"]);

const handle = () => {
  emit("tap", "xxx");
};
</script>
<template>
  <div>
    <h1>{{ text }}</h1>
    <button @click="handle">
      click me
    </button>
  </div>
</template>
