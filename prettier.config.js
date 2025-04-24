export default {
  importOrderParserPlugins: ['importAssertions', 'typescript', 'jsx'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
    // The order of plugins matters, and Tailwind CSS must be the last one.
    'prettier-plugin-tailwindcss',
  ],
  singleQuote: true,
  tailwindAttributes: ['className'],
  tailwindFunctions: ['cx'],
};
