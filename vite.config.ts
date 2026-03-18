import nkzw from '@nkzw/oxlint-config';
import fbtee from '@nkzw/vite-plugin-fbtee';
import react from '@vitejs/plugin-react';
import { transformSync as transformRelay } from 'oxc-transform-relay';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vite-plus';
import reactNative from 'vitest-react-native';

const relayPlugin = {
  enforce: 'pre' as const,
  name: 'oxc-transform-relay',
  transform: {
    filter: {
      code: /(?:^|[^\w.])graphql\s*`/m,
      id: { exclude: '**/node_modules/**', include: '**/*.tsx' },
    },
    handler(source: string, id: string) {
      const result = transformRelay(id, source, {
        lang: 'tsx',
        language: 'typescript',
        sourcemap: true,
      });
      if (result.errors.length) {
        throw new Error(result.errors.map(({ message }) => message).join('\n'));
      }
      return { code: result.code, map: result.map };
    },
  },
};

export default defineConfig({
  fmt: {
    experimentalTailwindcss: {
      stylesheet: 'global.css',
    },
    ignorePatterns: [
      '**/__generated__/**',
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
      '**/__generated__/**',
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
  plugins: [relayPlugin, fbtee(), (reactNative as unknown as () => PluginOption)(), react()],
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
