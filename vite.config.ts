import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using a relative base so the build works on any host (GitHub Pages, Vercel, Netlify).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
