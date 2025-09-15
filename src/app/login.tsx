import Stack from '@nkzw/stack';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from 'src/ui/Text.tsx';
import useViewerContext from 'src/user/useViewerContext.tsx';

export default function Login() {
  const router = useRouter();
  const { login } = useViewerContext();

  const onPress = useCallback(async () => {
    await login();
    router.replace('/');
  }, [login, router]);

  return (
    <SafeAreaView className="flex-1">
      <Stack alignCenter center className="!basis-full" flex1 padding={16}>
        <Text className="w-full text-center text-lg" onPress={onPress}>
          <fbt desc="Login button">Login</fbt>
        </Text>
      </Stack>
    </SafeAreaView>
  );
}
