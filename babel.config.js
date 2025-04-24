export default function (api) {
  api.cache(true);

  return {
    presets: [
      '@nkzw/babel-preset-fbtee',
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
}
