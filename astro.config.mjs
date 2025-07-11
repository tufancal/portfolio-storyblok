import { storyblok } from "@storyblok/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";

const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  integrations: [
    storyblok({
      output: "static",
      accessToken: env.STORYBLOK_TOKEN,
      components: {},
      apiOptions: {
        region: "eu",
      },
      bridge: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss(), mkcert()],
  },
});
