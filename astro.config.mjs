import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Witchlight Adventure",
      logo: { src: "./src/assets/logo.png" },
      sidebar: [{ label: "Sessions", autogenerate: { directory: "sessions" } }],
    }),
  ],
});
