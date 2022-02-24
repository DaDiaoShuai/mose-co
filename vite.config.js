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
  },
});
