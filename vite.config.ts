import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "https://pizza-pathway-mern-ts-backend.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
