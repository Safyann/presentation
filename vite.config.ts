import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
    },

    server: {
      port: +env.VITE_PORT || 3000,
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.js",
      coverage: {
        provider: "v8",
        exclude: [
          "**/node_modules/**",
          "**/dist/**",
          "**/cypress/**",
          "**/.{idea,git,cache,output,temp,storybook}/**",
          "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,commitlint,eslint}.config.*",
          "**/*.stories.*",
          "**/*.d.*",
        ],
      },
    },
  };
});
