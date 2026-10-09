import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the tool that turns our React code into a website a browser can read.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
