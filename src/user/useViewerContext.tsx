import createContextHook from '@nkzw/create-context-hook';
import UntypedAsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import getLocale, { setClientLocale } from 'src/i18n/getLocale.tsx';

// The type of AsyncStorage is not correctly exported when using `"type": "module"` 🤷‍♂️.
const AsyncStorage = UntypedAsyncStorage as unknown as Readonly<{
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
}>;

type LocalSettings = Readonly<{
  localSettingExample: string | null;
}>;

type ViewerContext = Readonly<{
  user: Readonly<{
    id: string;
  }>;
}>;

const getLocalStorageKey = (userID: string) =>
  `$userData${userID}$localSettings`;

const initialLocalSettings = {
  localSettingExample: null,
} as const;

const [ViewerContext, useViewerContext] = createContextHook(() => {
  const router = useRouter();

  const [viewerContext, setViewerContext] = useState<ViewerContext | null>(
    null,
  );

  const user = viewerContext?.user;

  const [locale, _setLocale] = useState(getLocale);

  const setLocale = useCallback((locale: string) => {
    setClientLocale(locale, async () => ({}));
    _setLocale(locale);
  }, []);

  const [localSettings, setLocalSettings] =
    useState<LocalSettings>(initialLocalSettings);

  const updateLocalSettings = useCallback(
    (settings: Partial<LocalSettings>) => {
      const newSettings = {
        ...localSettings,
        ...settings,
      };

      setLocalSettings(newSettings);

      if (user?.id) {
        AsyncStorage.setItem(
          getLocalStorageKey(user.id),
          JSON.stringify(newSettings),
        );
      }
    },
    [localSettings, user],
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

  return {
    isAuthenticated: !!user,
    localSettings,
    locale,
    login,
    logout,
    setLocale,
    updateLocalSettings,
    user,
  };
});

export function useLocalSettings() {
  const { localSettings, updateLocalSettings } = useViewerContext();
  return [localSettings, updateLocalSettings] as const;
}

export { ViewerContext };
export default useViewerContext;
