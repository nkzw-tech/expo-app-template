import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Redirect, Stack } from 'expo-router';
import useViewerContext from '../../user/useViewerContext.tsx';

export default function AppLayout() {
  const { isAuthenticated } = useViewerContext();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            contentStyle: { backgroundColor: 'transparent' },
            headerShown: false,
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}