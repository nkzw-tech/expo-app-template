import 'src/setup.tsx';
import 'global.css';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewerContext } from 'src/user/useViewerContext.tsx';

export const unstable_settings = {
  initialRouteName: '(app)',
};

export default function RootLayout() {
  return (
    <ViewerContext>
      <GestureHandlerRootView>
        <View className="flex-column flex-1 p-0">
          <Slot />
        </View>
      </GestureHandlerRootView>
    </ViewerContext>
  );
}
