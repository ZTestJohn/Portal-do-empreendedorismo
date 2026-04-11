import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/images": {
        target: "https://images.pexels.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/images/, ""),
      },
    },
  },
});
