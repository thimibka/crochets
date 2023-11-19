import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
});

export const routes = [{ src: "/[^.]+", dest: "/", status: 200 }];
