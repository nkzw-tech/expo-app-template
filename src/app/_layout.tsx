import { Stack } from 'expo-router';
import { setupFbtee } from 'fbtee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewerContext } from '../user/useViewerContext.tsx';

setupFbtee({ translations: {} });

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ViewerContext>
        <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" options={{ animation: 'fade' }} />
          <Stack.Screen name="(app)" options={{ animation: 'none' }} />
        </Stack>
      </ViewerContext>
    </GestureHandlerRootView>
  );
}
