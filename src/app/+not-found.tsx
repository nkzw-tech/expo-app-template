import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import Text from 'src/ui/Text.tsx';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-lg font-bold">
          <fbt desc="Screen not found title">
            This screen doesn&apos;t exist.
          </fbt>
        </Text>
        <Link className="mt-4 pt-4" href="/">
          <Text className="text-base text-[#2e78b7]">
            <fbt desc="Go back link">Go to home screen!</fbt>
          </Text>
        </Link>
      </View>
    </>
  );
}
