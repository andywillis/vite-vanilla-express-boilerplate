/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

import compress from 'vite-plugin-compression';
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [ compress(), splitVendorChunkPlugin() ],
  server: {
    proxy: {
      '/blog': {
        target: 'https://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'build'
  }
});
