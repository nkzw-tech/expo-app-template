import '../../global.css';
import { VStack } from '@nkzw/stack';
import { getLocales } from 'expo-localization';
import { Slot } from 'expo-router';
import { createLocaleContext } from 'fbtee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RelayEnvironmentProvider } from 'react-relay';
import { Environment, FetchFunction, Network } from 'relay-runtime';
import ja_JP from '../translations/ja_JP.json' with { type: 'json' };
import { ViewerContext } from '../user/useViewerContext.tsx';

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

const HTTP_ENDPOINT = 'https://graphql.org/graphql/';

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const response = await fetch(HTTP_ENDPOINT, {
    body: JSON.stringify({ query: request.text, variables }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Response failed.');
  }

  return await response.json();
};

const environment = new Environment({
  network: Network.create(fetchGraphQL),
});

export default function RootLayout() {
  return (
    <LocaleContext>
      <ViewerContext>
        <RelayEnvironmentProvider environment={environment}>
          <GestureHandlerRootView>
            <VStack className="!basis-full" flex1>
              <Slot />
            </VStack>
          </GestureHandlerRootView>
        </RelayEnvironmentProvider>
      </ViewerContext>
    </LocaleContext>
  );
}
