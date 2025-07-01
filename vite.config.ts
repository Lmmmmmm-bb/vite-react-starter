import { resolve } from 'node:path';
import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-oxc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwind(), react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  experimental: {
    enableNativePlugin: true,
  },
});
