import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/symlink", component: "symlink" },
  ],
  npmClient: 'pnpm',
  utoopack: {},
});
