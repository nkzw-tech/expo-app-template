const {
  createTransformer,
  getExpoTransformer,
  getReactNativeTransformer,
} = require('react-native-svg-transformer');

const upstreamTransformer = getExpoTransformer() || getReactNativeTransformer();
const fbteeTransformer = import('@nkzw/oxc-transform-fbtee');

const getLanguage = (filename) => {
  if (filename.endsWith('.tsx')) {
    return 'tsx';
  }

  if (filename.endsWith('.ts')) {
    return 'ts';
  }

  if (filename.endsWith('.jsx') || filename.endsWith('.svg')) {
    return 'jsx';
  }

  return 'js';
};

const transform = async ({ filename, src, ...options }) => {
  if (/[\\/]node_modules[\\/]/.test(filename)) {
    return upstreamTransformer.transform({ filename, src, ...options });
  }

  const { transform: transformFbtee } = await fbteeTransformer;
  const result = await transformFbtee(filename, src, {
    lang: getLanguage(filename),
    sourceType: 'unambiguous',
  });

  const errors = result.errors.filter(({ severity }) => severity === 'Error');
  if (errors.length > 0) {
    throw new Error(errors.map(({ codeframe, message }) => codeframe || message).join('\n\n'));
  }

  return upstreamTransformer.transform({ filename, src: result.code, ...options });
};

module.exports.transform = createTransformer({ transform });
