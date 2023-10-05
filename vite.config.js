import { defineConfig } from "vite";

import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  base: "/urfu-oop",
  build: {
    outDir: "build",
  },
  server: {
    open: '/urfu-oop',
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});