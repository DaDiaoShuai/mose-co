<script setup>
import Logo from "./logo.vue";
import Mode from "./mode.vue";
import MENUS from "./menu";

const toggleMode = (mode) => {
  console.log("🌽🌽🌽🌽");
  console.log(mode);
};
</script>

<template>
  <nav
    class="fixed top-0 w-full flex items-center h-16 dark:bg-stone-600 dark:text-font-light text-font transition-all duration-1000 shadow border-y-0 bg-white/40 bg-gradient-to-l from-[#6d6027]/40 to-[#d3cbb8]/40 z-[100]"
  >
    <div class="flex justify-between items-center container mx-auto">
      <Logo />

      <section class="flex items-center">
        <div class="link">
          <router-link
            class="pr-6 hover:text-primary dark:hover:text-font-light/60 align-middle"
            :to="menu.to"
            v-for="menu of MENUS"
            :key="menu.to"
            >{{ menu.title }}</router-link
          >
        </div>
        <Mode @toggleMode="toggleMode" />
      </section>
    </div>
  </nav>
</template>
<style lang="stylus" scoped></style>
