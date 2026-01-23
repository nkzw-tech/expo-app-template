import { VStack } from '@nkzw/stack';
import { Text } from 'react-native';
import useViewerContext from '../../../user/useViewerContext.tsx';

export default function Two() {
  const { logout } = useViewerContext();

  return (
    <VStack flex1 padding={16}>
      <Text onPress={logout}>
        <fbt desc="Two header title">Logout</fbt>
      </Text>
    </VStack>
  );
}
