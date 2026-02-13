import nkzw from '@nkzw/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [nkzw],
  ignorePatterns: [
    '__generated__/',
    '.expo/',
    'android/',
    'coverage/',
    'dist/',
    'ios/',
    'metro.config.cjs',
    'vite.config.ts.timestamp-*',
    'web-build/',
  ],
});
