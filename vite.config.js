import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const rootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "@assets": path.resolve(rootDir, "src/assets"),
    },
  },
  server: {
    host: "0.0.0.0",
    open: true,
    // proxy: {
    //   "/_AMapService/v4/map/styles": {
    //     target:
    //       "https://webapi.amap.com/v4/map/styles?jscode=4b217e88975d8e573c2332b750272459",
    //   },
    //   "/_AMapService/": {
    //     target:
    //       "https://restapi.amap.com?jscode=4b217e88975d8e573c2332b750272459/",
    //   },
    // },
  },
});
