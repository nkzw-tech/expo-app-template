const {
  createTransformer,
  getExpoTransformer,
  getReactNativeTransformer,
} = require('react-native-svg-transformer');

const upstreamTransformer = getExpoTransformer() || getReactNativeTransformer();
const fbteeTransformer = import('@nkzw/oxc-transform-fbtee');
const relayTransformer = import('oxc-transform-relay');
const relayTagPattern = /(?:^|[^\w.])graphql\s*`/m;

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

  const language = getLanguage(filename);
  if (relayTagPattern.test(src)) {
    const { transform: transformRelay } = await relayTransformer;
    const relayResult = await transformRelay(filename, src, {
      lang: language,
      language: 'typescript',
      sourceType: 'unambiguous',
    });

    const relayErrors = relayResult.errors.filter(({ severity }) => severity === 'Error');
    if (relayErrors.length > 0) {
      throw new Error(
        relayErrors.map(({ codeframe, message }) => codeframe || message).join('\n\n'),
      );
    }

    src = relayResult.code;
  }

  const { transform: transformFbtee } = await fbteeTransformer;
  const result = await transformFbtee(filename, src, {
    lang: language,
    sourceType: 'unambiguous',
  });

  const errors = result.errors.filter(({ severity }) => severity === 'Error');
  if (errors.length > 0) {
    throw new Error(errors.map(({ codeframe, message }) => codeframe || message).join('\n\n'));
  }

  return upstreamTransformer.transform({ filename, src: result.code, ...options });
};

module.exports.transform = createTransformer({ transform });
