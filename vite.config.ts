import { defineConfig } from 'vite'
import litcss from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      fileName: 'index',
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      // external: /^lit/,
    },
  },
  plugins: [
    {
      ...litcss(),
      enforce: 'post'
    }
  ]
})
