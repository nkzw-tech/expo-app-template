import fbteePreset from '@nkzw/babel-preset-fbtee';
import nkzw from '@nkzw/oxlint-config';
import babel from '@rolldown/plugin-babel';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';
import reactNative from 'vitest-react-native';

export default defineConfig({
  fmt: {
    experimentalTailwindcss: {
      stylesheet: 'global.css',
    },
    ignorePatterns: [
      '.enum_manifest.json',
      '.expo/',
      '.source_strings.json',
      '.src_manifest.json',
      'android/',
      'coverage/',
      'dist/',
      'index.html',
      'ios/',
      'patches/',
      'pnpm-lock.yaml',
      'web-build/',
      'src/translations/',
    ],
    singleQuote: true,
    sortImports: {
      newlinesBetween: false,
    },
    sortPackageJson: {
      sortScripts: true,
    },
  },
  lint: {
    extends: [nkzw],
    ignorePatterns: [
      '.expo/',
      'android/',
      'coverage/',
      'dist/',
      'ios/',
      'metro.config.cjs',
      'vite.config.ts.timestamp-*',
      'web-build/',
    ],
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    tasks: {
      'test:all': {
        command: 'vp check && vp test',
      },
    },
  },
  staged: {
    '*': 'vp check --fix',
  },
  test: {
    plugins: [
      babel({
        presets: [fbteePreset],
      }),
      (reactNative as unknown as () => void)(),
      react(),
    ],
  },
});
