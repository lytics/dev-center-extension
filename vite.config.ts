/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';

import manifest from './manifest.config';
import customDynamicImport from './utils/plugins/custom-dynamic-import';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');
const pagesDir = resolve(srcDir, 'pages');
const assetsDir = resolve(srcDir, 'assets');
const publicDir = resolve(rootDir, 'public');

export default defineConfig({
  resolve: {
    alias: {
      '@root': rootDir,
      '@src': srcDir,
      '@assets': assetsDir,
      '@pages': pagesDir,
    },
  },
  plugins: [
    react(),
    crx({ manifest }),
    customDynamicImport() as any,
    viteStaticCopy({
      targets: [
        {
          src: 'rules.json',
          dest: '.',
        },
        {
          src: 'src/assets/img/**.png',
          dest: 'assets/img',
        },
      ],
    }),
  ],
  publicDir,
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
});
