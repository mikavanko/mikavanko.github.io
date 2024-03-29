import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import svgLoader from "vite-svg-loader";

const API_URL = "";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.NODE_ENV === 'production' ? '/canvascap/dist/' : '',
  plugins: [vue(), svgLoader({
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'cleanupIDs',
          params: {
            prefix: {
              toString() {
                this.counter = this.counter || 0;
                return `id-${this.counter++}`;
              }
            }
          }
        }
      ]
    }
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/colors.scss";
          @import "@/assets/scss/mixins.scss";
          @import "@/assets/scss/variables.scss";
        `,
      },
    },
  },

  server: {
    proxy: {
      "^/api": {
        target: mode === "production" ? API_URL : API_URL,
        changeOrigin: true,
        headers: {}
        // configure: (proxy, options) => {
        //   // proxy will be an instance of 'http-proxy'
        // }
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
}));
