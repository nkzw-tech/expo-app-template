// @ts-expect-error This file does not have type definitions.
import nativewindPreset from 'nativewind/dist/tailwind/index.js';
import type { Config } from 'tailwindcss';
import type { CSSRuleObject } from 'tailwindcss/types/config.d.ts';
import colors from './src/ui/colors.ts';

const variables: { [key: string]: string } = {};
const colorMap: { [key: string]: string } = {};

for (const [name, color] of Object.entries(colors)) {
  variables[`--${name}`] = color;
  colorMap[name] = `var(--${name})`;
}

export default {
  content: ['./src/**/*.{js,ts,tsx}'],
  plugins: [
    ({
      addBase,
    }: {
      addBase: (base: CSSRuleObject | Array<CSSRuleObject>) => void;
    }) =>
      addBase({
        ':root': variables,
      }),
  ],
  presets: [nativewindPreset],
  theme: {
    colors: colorMap,
  },
} satisfies Config;
