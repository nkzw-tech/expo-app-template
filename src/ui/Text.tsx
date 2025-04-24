import { ReactNode } from 'react';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Text as ReactNativeText, TextProps } from 'react-native';
import { cx } from 'src/lib/cx.tsx';

export default function Text({
  children,
  className,
  style,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & TextProps) {
  return (
    <ReactNativeText
      className={cx('color-[var(--text)]', className)}
      style={[style]}
      {...props}
    >
      {children}
    </ReactNativeText>
  );
}
