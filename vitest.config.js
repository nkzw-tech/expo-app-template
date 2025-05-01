// this is needed for react jsx support
import fbteePreset from '@nkzw/babel-preset-fbtee';
import react from '@vitejs/plugin-react';
import reactNative from 'vitest-react-native';

export default {
  plugins: [
    reactNative(),
    react({
      babel: {
        presets: [fbteePreset],
      },
    }),
  ],
};
