import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: { port: 3017, host: "0.0.0.0" },
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  build: { copyPublicDir: !isSsrBuild },
}));
