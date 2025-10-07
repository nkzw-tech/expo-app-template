export default function (api) {
  api.cache(true);

  return {
    plugins: [
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ],
    presets: [
      '@nkzw/babel-preset-fbtee',
      [
        'babel-preset-expo',
        { decorators: { version: '2023-11' }, jsxImportSource: 'nativewind' },
      ],
      'nativewind/babel',
    ],
  };
}
