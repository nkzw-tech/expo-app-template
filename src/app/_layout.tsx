import 'global.css';
import { getLocales } from 'expo-localization';
import { Slot } from 'expo-router';
import { createLocaleContext } from 'fbtee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewerContext } from 'src/user/useViewerContext.tsx';
import ja_JP from '../translations/ja_JP.json' with { type: 'json' };
import { VStack } from '@nkzw/stack';

export const unstable_settings = {
  initialRouteName: '(app)',
};

const LocaleContext = createLocaleContext({
  availableLanguages: new Map([
    ['en_US', 'English'],
    ['ja_JP', '日本語 (Japanese)'],
  ] as const),
  clientLocales: getLocales().map(({ languageTag }) => languageTag),
  loadLocale: async (locale: string) => {
    if (locale === 'ja_JP') {
      return ja_JP.ja_JP;
    }
    return {};
  },
});

export default function RootLayout() {
  return (
    <LocaleContext>
      <ViewerContext>
        <GestureHandlerRootView>
          <VStack flex1>
            <Slot />
          </VStack>
        </GestureHandlerRootView>
      </ViewerContext>
    </LocaleContext>
  );
}
