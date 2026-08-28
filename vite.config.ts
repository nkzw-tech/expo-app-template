import nkzw from '@nkzw/oxlint-config';
import fbtee from '@nkzw/vite-plugin-fbtee';
import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
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
      'src/uniwind-types.d.ts',
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
      'metro.transformer.cjs',
      'vite.config.ts.timestamp-*',
      'web-build/',
    ],
    options: { typeAware: true, typeCheck: true },
  },
  plugins: [fbtee(), (reactNative as unknown as () => PluginOption)(), react()],
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
});
