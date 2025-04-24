import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
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
      <View className="flex-1 items-center justify-center p-4">
        <Text className="w-full text-center text-lg" onPress={onPress}>
          <fbt desc="Login button">Login</fbt>
        </Text>
      </View>
    </SafeAreaView>
  );
}
