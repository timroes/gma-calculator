import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import checker from "vite-plugin-checker";

// Constrain the build to a single core. GOMAXPROCS caps esbuild's Go runtime to
// one OS thread; it must be set before esbuild spawns its child process, so we
// set it here at config-load time. Rollup's file load/transform concurrency is
// serialized separately via build.rollupOptions.maxParallelFileOps below.
process.env.GOMAXPROCS = "1";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      // Process files one at a time instead of Rollup's default of 20 in
      // parallel, keeping the build on a single core.
      maxParallelFileOps: 1,
    },
  },
});
