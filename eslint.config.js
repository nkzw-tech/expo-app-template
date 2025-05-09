import nkzw from '@nkzw/eslint-config';
import fbtee from '@nkzw/eslint-plugin-fbtee';

export default [
  ...nkzw,
  fbtee.configs.strict,
  {
    ignores: [
      '__generated__',
      '.expo',
      'android/',
      'dist/',
      'ios/',
      'vite.config.ts.timestamp-*',
    ],
  },
  {
    files: ['scripts/**/*.tsx'],
    rules: {
      'no-console': 0,
    },
  },
  {
    files: ['metro.config.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 0,
    },
  },
  {
    plugins: {
      '@nkzw/fbtee': fbtee,
    },
    rules: {
      '@nkzw/fbtee/no-untranslated-strings': 0,
      '@typescript-eslint/array-type': [2, { default: 'generic' }],
      '@typescript-eslint/no-restricted-imports': [
        2,
        {
          paths: [
            {
              importNames: ['Text'],
              message:
                'Please use the corresponding UI components from `src/ui/` instead.',
              name: 'react-native',
            },
            {
              importNames: ['ScrollView'],
              message:
                'Please use the corresponding UI component from `react-native-gesture-handler` instead.',
              name: 'react-native',
            },
            {
              importNames: ['BottomSheetModal'],
              message:
                'Please use the corresponding UI components from `src/ui/` instead.',
              name: '@gorhom/bottom-sheet',
            },
          ],
        },
      ],
      'import-x/no-extraneous-dependencies': [
        2,
        {
          devDependencies: [
            './eslint.config.js',
            './scripts/**.tsx',
            './tailwind.config.ts',
            './vitest.config.js',
            '**/*.test.tsx',
          ],
        },
      ],
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
];
