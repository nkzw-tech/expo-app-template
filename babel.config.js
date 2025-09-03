export default function (api) {
  api.cache(true);

  return {
<<<<<<< HEAD
    plugins: [
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ],
||||||| parent of 2d8b304 (Add Relay.)
=======
    plugins: ['babel-plugin-relay'],
>>>>>>> 2d8b304 (Add Relay.)
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
