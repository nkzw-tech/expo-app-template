import createContextHook from '@nkzw/create-context-hook';
import { useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { MMKV } from 'react-native-mmkv';

type LocalSettingKey = 'localSettingExample';

type ViewerContext = Readonly<{
  user: Readonly<{
    id: string;
  }>;
}>;

const [ViewerContext, useViewerContext] = createContextHook(() => {
  const router = useRouter();

  const [viewerContext, setViewerContext] = useState<ViewerContext | null>(
    null,
  );

  const user = viewerContext?.user;

  const storage = useMemo(
    () =>
      user?.id
        ? new MMKV({
            id: `$userData${user.id}$localSettings`,
          })
        : null,
    [user?.id],
  );

  const login = useCallback(async () => {
    // Implement your login logic here.
    setViewerContext({
      user: { id: '4' },
    });
    router.replace('/');
  }, [router]);

  const logout = useCallback(async () => {
    // Implement your logout logic here.
    setViewerContext(null);
    router.replace('/');
  }, [router]);

  const getLocalSetting = useCallback(
    (name: LocalSettingKey) => {
      return storage?.getString(name) || null;
    },
    [storage],
  );

  const setLocalSetting = useCallback(
    (name: LocalSettingKey, value: string | null) => {
      if (value == null) {
        storage?.delete(name);
      } else {
        storage?.set(name, value);
      }
    },
    [storage],
  );

  return {
    getLocalSetting,
    isAuthenticated: !!user,
    login,
    logout,
    setLocalSetting,
    user,
  };
});

export function useLocalSettings() {
  const { getLocalSetting, setLocalSetting } = useViewerContext();
  return [getLocalSetting, setLocalSetting] as const;
}

export { ViewerContext };
export default useViewerContext;
