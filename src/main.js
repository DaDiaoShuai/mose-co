import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "@/router";
import "@/assets/main.css";

const app = createApp(App);

app.use(VueRouter);

app.mount("#app");
