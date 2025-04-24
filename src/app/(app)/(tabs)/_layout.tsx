import _AntDesign from '@expo/vector-icons/AntDesign.js';
import { Tabs } from 'expo-router';
import { fbs } from 'fbtee';
import { FC } from 'react';
import { Pressable, View } from 'react-native';
import getLocale from 'src/i18n/getLocale.tsx';
import colors from 'src/ui/colors.ts';
import Text from 'src/ui/Text.tsx';
import useViewerContext from 'src/user/useViewerContext.tsx';

// Types in `@expo/vector-icons` do not currently work correctly in `"type": "module"` packages.
const AntDesign = _AntDesign as unknown as FC<{
  color: string;
  name: string;
  size: number;
}>;

export default function TabLayout() {
  const { locale, setLocale } = useViewerContext();

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: 'transparent',
        },
        tabBarActiveTintColor: colors.purple,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Pressable
              className="mr-2 rounded px-4 py-0"
              onPress={() => setLocale(locale === 'ja_JP' ? 'en_US' : 'ja_JP')}
            >
              {({ pressed }) => (
                <View
                  style={{
                    opacity: pressed ? 0.5 : 1,
                  }}
                >
                  <Text>{getLocale().split('_')[0]}</Text>
                </View>
              )}
            </Pressable>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <AntDesign
              color={focused ? colors.purple : colors.black}
              name="ie"
              size={24}
            />
          ),
          title: String(fbs('Home', 'Home tab title')),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <AntDesign
              color={focused ? colors.purple : colors.black}
              name="printer"
              size={24}
            />
          ),
          title: String(fbs('Two', 'Two tab title')),
        }}
      />
    </Tabs>
  );
}
