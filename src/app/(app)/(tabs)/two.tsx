import Text from 'src/ui/Text.tsx';
import useViewerContext from 'src/user/useViewerContext.tsx';
import { VStack } from '@nkzw/stack';

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
