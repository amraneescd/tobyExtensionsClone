// vite.config.ts
import { lingui } from "file:///C:/tobyExtensionsClone/reactive/node_modules/@lingui/vite-plugin/dist/index.cjs";
import react from "file:///C:/tobyExtensionsClone/reactive/node_modules/@vitejs/plugin-react/dist/index.mjs";
import UnoCSS from "file:///C:/tobyExtensionsClone/reactive/node_modules/unocss/dist/vite.mjs";
import { defineConfig } from "file:///C:/tobyExtensionsClone/reactive/node_modules/vite/dist/node/index.js";
import { imagetools } from "file:///C:/tobyExtensionsClone/reactive/node_modules/vite-imagetools/dist/index.js";
import { plugin, Mode } from "file:///C:/tobyExtensionsClone/reactive/node_modules/vite-plugin-markdown/dist/index.js";
import { pluginJsonServer } from "file:///C:/tobyExtensionsClone/reactive/node_modules/vite-plugin-json-server/dist/index.cjs";
import Inspect from "file:///C:/tobyExtensionsClone/reactive/node_modules/vite-plugin-inspect/dist/index.mjs";
import topLevelAwait from "file:///C:/tobyExtensionsClone/reactive/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import remixRouter from "file:///C:/tobyExtensionsClone/reactive/node_modules/unplugin-remix-router/dist/vite.js";
import { qrcode } from "file:///C:/tobyExtensionsClone/reactive/node_modules/vite-plugin-qrcode/dist/index.js";
import Unimport from "file:///C:/tobyExtensionsClone/reactive/node_modules/unimport/dist/unplugin.mjs";
var vite_config_default = defineConfig(async () => {
  return {
    resolve: { alias: { "@": "/app" } },
    // https://github.com/vitest-dev/vitest
    test: {
      include: ["test/**/*.{spec,test}.?(c|m)[jt]s?(x)"],
      environment: "happy-dom"
    },
    plugins: [
      react({
        babel: {
          plugins: ["macros"]
        }
      }),
      remixRouter(),
      lingui(),
      UnoCSS(),
      Inspect(),
      topLevelAwait(),
      // add `declare module "@/content/*"` to vite-env.d.ts to use with typescript
      plugin({
        mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC, Mode.REACT]
      }),
      pluginJsonServer({
        profile: "./db"
      }),
      // add `declare module "@/assets/*"` to vite-env.d.ts to use with typescript
      imagetools(),
      qrcode(),
      Unimport.vite({
        presets: ["react", "react-router-dom", "vitest"],
        dirs: [
          "./app/components/*",
          "./app/config/*",
          "./app/middlewares/*",
          "./app/stores/*",
          "./app/queries/*"
        ],
        dts: true
      })
    ],
    base: "./"
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx0b2J5RXh0ZW5zaW9uc0Nsb25lXFxcXHJlYWN0aXZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx0b2J5RXh0ZW5zaW9uc0Nsb25lXFxcXHJlYWN0aXZlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi90b2J5RXh0ZW5zaW9uc0Nsb25lL3JlYWN0aXZlL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5cclxuaW1wb3J0IHsgbGluZ3VpIH0gZnJvbSAnQGxpbmd1aS92aXRlLXBsdWdpbidcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBpbWFnZXRvb2xzIH0gZnJvbSAndml0ZS1pbWFnZXRvb2xzJ1xyXG5pbXBvcnQgeyBwbHVnaW4sIE1vZGUgfSBmcm9tICd2aXRlLXBsdWdpbi1tYXJrZG93bidcclxuaW1wb3J0IHsgcGx1Z2luSnNvblNlcnZlciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWpzb24tc2VydmVyJ1xyXG4vLyBpbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xyXG5pbXBvcnQgdG9wTGV2ZWxBd2FpdCBmcm9tICd2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXQnXHJcbmltcG9ydCByZW1peFJvdXRlciBmcm9tICd1bnBsdWdpbi1yZW1peC1yb3V0ZXIvdml0ZSdcclxuaW1wb3J0IHsgcXJjb2RlIH0gZnJvbSAndml0ZS1wbHVnaW4tcXJjb2RlJ1xyXG5pbXBvcnQgVW5pbXBvcnQgZnJvbSAndW5pbXBvcnQvdW5wbHVnaW4nXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXNvbHZlOiB7IGFsaWFzOiB7ICdAJzogJy9hcHAnIH0gfSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3RcclxuICAgIHRlc3Q6IHtcclxuICAgICAgaW5jbHVkZTogWyd0ZXN0LyoqLyoue3NwZWMsdGVzdH0uPyhjfG0pW2p0XXM/KHgpJ10sXHJcbiAgICAgIGVudmlyb25tZW50OiAnaGFwcHktZG9tJyxcclxuICAgIH0sXHJcblxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWFjdCh7XHJcbiAgICAgICAgYmFiZWw6IHtcclxuICAgICAgICAgIHBsdWdpbnM6IFsnbWFjcm9zJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIHJlbWl4Um91dGVyKCksXHJcbiAgICAgIGxpbmd1aSgpLFxyXG4gICAgICBVbm9DU1MoKSxcclxuICAgICAgSW5zcGVjdCgpLFxyXG4gICAgICB0b3BMZXZlbEF3YWl0KCksXHJcbiAgICAgIC8vIGFkZCBgZGVjbGFyZSBtb2R1bGUgXCJAL2NvbnRlbnQvKlwiYCB0byB2aXRlLWVudi5kLnRzIHRvIHVzZSB3aXRoIHR5cGVzY3JpcHRcclxuICAgICAgcGx1Z2luKHtcclxuICAgICAgICBtb2RlOiBbTW9kZS5IVE1MLCBNb2RlLk1BUktET1dOLCBNb2RlLlRPQywgTW9kZS5SRUFDVF0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBwbHVnaW5Kc29uU2VydmVyKHtcclxuICAgICAgICBwcm9maWxlOiAnLi9kYicsXHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBhZGQgYGRlY2xhcmUgbW9kdWxlIFwiQC9hc3NldHMvKlwiYCB0byB2aXRlLWVudi5kLnRzIHRvIHVzZSB3aXRoIHR5cGVzY3JpcHRcclxuICAgICAgaW1hZ2V0b29scygpLFxyXG4gICAgICBxcmNvZGUoKSxcclxuICAgICAgVW5pbXBvcnQudml0ZSh7XHJcbiAgICAgICAgcHJlc2V0czogWydyZWFjdCcsICdyZWFjdC1yb3V0ZXItZG9tJywgJ3ZpdGVzdCddLFxyXG4gICAgICAgIGRpcnM6IFtcclxuICAgICAgICAgICcuL2FwcC9jb21wb25lbnRzLyonLFxyXG4gICAgICAgICAgJy4vYXBwL2NvbmZpZy8qJyxcclxuICAgICAgICAgICcuL2FwcC9taWRkbGV3YXJlcy8qJyxcclxuICAgICAgICAgICcuL2FwcC9zdG9yZXMvKicsXHJcbiAgICAgICAgICAnLi9hcHAvcXVlcmllcy8qJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGR0czogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgYmFzZTogJy4vJyxcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLGNBQWM7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLFFBQVEsWUFBWTtBQUM3QixTQUFTLHdCQUF3QjtBQUVqQyxPQUFPLGFBQWE7QUFDcEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxjQUFjO0FBQ3ZCLE9BQU8sY0FBYztBQUdyQixJQUFPLHNCQUFRLGFBQWEsWUFBWTtBQUN0QyxTQUFPO0FBQUEsSUFDTCxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBTyxFQUFFO0FBQUE7QUFBQSxJQUdsQyxNQUFNO0FBQUEsTUFDSixTQUFTLENBQUMsdUNBQXVDO0FBQUEsTUFDakQsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxRQUNKLE9BQU87QUFBQSxVQUNMLFNBQVMsQ0FBQyxRQUFRO0FBQUEsUUFDcEI7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQTtBQUFBLE1BRWQsT0FBTztBQUFBLFFBQ0wsTUFBTSxDQUFDLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSztBQUFBLE1BQ3ZELENBQUM7QUFBQSxNQUNELGlCQUFpQjtBQUFBLFFBQ2YsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBO0FBQUEsTUFFRCxXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxTQUFTLEtBQUs7QUFBQSxRQUNaLFNBQVMsQ0FBQyxTQUFTLG9CQUFvQixRQUFRO0FBQUEsUUFDL0MsTUFBTTtBQUFBLFVBQ0o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLE1BQ1AsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
