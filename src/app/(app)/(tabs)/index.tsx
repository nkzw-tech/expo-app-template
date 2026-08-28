import Stack, { VStack } from '@nkzw/stack';
import { Stack as ExpoStack } from 'expo-router';
import { fbs } from 'fbtee';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <>
      <ExpoStack.Screen options={{ title: String(fbs('Home', 'Home header title')) }} />
      <VStack alignCenter center flex1 gap={16} padding>
        <Text className="text-center text-xl font-bold text-accent">
          <fbt desc="Greeting">Welcome</fbt>
        </Text>
        <Text className="text-center italic">
          <fbt desc="Tagline">Modern, sensible defaults, fast.</fbt>
        </Text>
        <Stack alignCenter center gap={4}>
          <Text className="text-center leading-7">
            <fbt desc="Live update message">
              Change{' '}
              <View className="bg-subtle inline-flex -translate-y-0.5 rounded border border-accent px-1">
                <Text className="font-mono">src/app/(app)/(tabs)/index.tsx</Text>
              </View>{' '}
              for live updates.
            </fbt>
          </Text>
        </Stack>
      </VStack>
    </>
  );
}
