// @ts-ignore
/// <reference types="nativewind/types.d.ts" />
/// <reference types="fbtee/ReactTypes.d.ts" />

declare module '*.svg' {
  import { FC } from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: FC<SvgProps & { currentColor?: string }>;
  export default content;
}
