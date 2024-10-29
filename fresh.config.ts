import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { createClient } from "edgedb";

// Initialize EdgeDB client
export const client = createClient();

export default defineConfig({
  plugins: [tailwind()],
});
