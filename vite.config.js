import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/favorite/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        recipe: resolve(__dirname, "src/recipe_page/index.html"),
        listing: resolve(__dirname, "src/recipe-listing/index.html"),
      },
    },
  },
});
