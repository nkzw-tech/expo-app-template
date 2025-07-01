import { Stack as ExpoStack } from 'expo-router';
import { fbs } from 'fbtee';
import { View } from 'react-native';
import Text from 'src/ui/Text.tsx';
import Stack, { VStack } from '@nkzw/stack';

export default function Index() {
  return (
    <>
      <ExpoStack.Screen
        options={{ title: String(fbs('Home', 'Home header title')) }}
      />
      <VStack alignCenter center flex1 gap={16} padding>
        <Text className="text-center text-xl font-bold color-purple">
          <fbt desc="Greeting">Welcome</fbt>
        </Text>
        <Text className="text-center italic">
          <fbt desc="Tagline">Modern, sensible defaults, fast.</fbt>
        </Text>
        <Stack alignCenter center gap={4}>
          <Text className="text-center">
            <fbt desc="Live update message">
              Change{' '}
              <View className="border-hairline translate-y-[8px] rounded border-purple bg-grey p-1">
                <Text>src/app/(app)/(tabs)/index.tsx</Text>
              </View>{' '}
              for live updates.
            </fbt>
          </Text>
        </Stack>
      </VStack>
    </>
  );
}
