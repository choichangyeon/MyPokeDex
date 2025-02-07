import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@reduxConfig", replacement: "/src/redux/config" },
      { find: "@slices", replacement: "/src/redux/slices" },
      { find: "@image", replacement: "/src/assets/image" },
    ],
  },
});
