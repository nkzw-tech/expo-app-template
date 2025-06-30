import Text from 'src/ui/Text.tsx';
import useViewerContext from 'src/user/useViewerContext.tsx';
import Stack from '@nkzw/stack';

export default function Two() {
  const { logout } = useViewerContext();

  return (
    <Stack flex1 padding={16} vertical>
      <Text onPress={logout}>
        <fbt desc="Two header title">Logout</fbt>
      </Text>
    </Stack>
  );
}
