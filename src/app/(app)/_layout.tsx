import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Redirect, Stack } from 'expo-router';
import { useLocaleContext } from 'fbtee';
import { Fragment } from 'react/jsx-runtime';
import useViewerContext from 'src/user/useViewerContext.tsx';

export default function TabLayout() {
  const { locale } = useLocaleContext();
  const { isAuthenticated } = useViewerContext();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Fragment key={locale}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              contentStyle: {
                backgroundColor: 'transparent',
              },
              headerShown: false,
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </Fragment>
  );
}
