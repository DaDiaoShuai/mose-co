<script>
import { ref, toRefs, isRef } from "vue";
export default {
  props: {
    data: String,
  },
  setup(props, context) {
    const text = ref("son text");
    const prop = toRefs(props);

    const dataProp = prop.data;

    console.log(isRef(prop));

    const handle = () => {
      context.emit("tap", "emit value");
    };

    return {
      text,
      handle,
      dataProp,
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ dataProp }}</h1>
    <button @click="handle">
      click me
    </button>
  </div>
</template>
