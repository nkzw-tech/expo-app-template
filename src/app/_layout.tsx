import 'global.css';
import { getLocales } from 'expo-localization';
import { Slot } from 'expo-router';
import { LocaleContext } from 'fbtee';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ViewerContext } from 'src/user/useViewerContext.tsx';
import ja_JP from '../translations/ja_JP.json' with { type: 'json' };

export const unstable_settings = {
  initialRouteName: '(app)',
};

const availableLanguages = new Map([
  ['en_US', 'English'],
  ['ja_JP', '日本語 (Japanese)'],
] as const);

const clientLocales = getLocales().map(({ languageTag }) => languageTag);
const loadLocale = async (locale: string) => {
  if (locale === 'ja_JP') {
    return ja_JP.ja_JP;
  }
  return {};
};

export default function RootLayout() {
  return (
    <LocaleContext
      availableLanguages={availableLanguages}
      clientLocales={clientLocales}
      loadLocale={loadLocale}
    >
      <ViewerContext>
        <GestureHandlerRootView>
          <View className="flex-column flex-1 p-0">
            <Slot />
          </View>
        </GestureHandlerRootView>
      </ViewerContext>
    </LocaleContext>
  );
}
