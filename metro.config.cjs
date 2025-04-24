const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(
  {
    ...config,
    resolver: {
      ...config.resolver,
      assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...config.resolver.sourceExts, 'svg'],
    },
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve(
        'react-native-svg-transformer/expo',
      ),
    },
  },
  {
    input: './global.css',
  },
);
