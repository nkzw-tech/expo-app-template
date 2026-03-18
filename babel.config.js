export default function (api) {
  api.cache(true);

  return {
    plugins: ['babel-plugin-relay'],
    presets: ['@nkzw/babel-preset-fbtee', 'babel-preset-expo'],
  };
}
