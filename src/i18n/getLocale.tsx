import isPresent from '@nkzw/core/isPresent.js';
import { getLocales as getDeviceLocales } from 'expo-localization';
import { TranslationDictionary, TranslationTable } from 'fbtee';

const AvailableLanguages = new Map([
  ['en_US', 'English'],
  ['ja_JP', '日本語 (Japanese)'],
] as const);

type LocaleLoaderFn = (
  locale: string,
) => Promise<{ [hashKey: string]: TranslationTable }>;

const _defaultLanguage = 'en_US';
const availableLocales = new Map<string, string>();
const translations: TranslationDictionary = { [_defaultLanguage]: {} };

for (const [locale] of AvailableLanguages) {
  availableLocales.set(locale, locale);
  availableLocales.set(locale.split('_')[0], locale);
}

export async function setClientLocale(
  locale: string,
  loadLocale: LocaleLoaderFn,
) {
  if (availableLocales.has(locale)) {
    await maybeLoadLocale(locale, loadLocale);
    if (locale !== currentLanguage) {
      currentLanguage = locale;
    }
  }
}

export function getLocales({
  fallback = _defaultLanguage,
} = {}): ReadonlyArray<string> {
  return Array.from(
    new Set(
      [...getDeviceLocales().map(({ languageTag }) => languageTag), fallback]
        .flatMap((locale: string) => {
          if (!locale) {
            return null;
          }
          const [first = '', second] = locale.split(/-|_/);
          return [
            `${first.toLowerCase()}${second ? `_${second.toUpperCase()}` : ''}`,
            first.toLowerCase(),
          ];
        })
        .filter(isPresent),
    ),
  );
}

let currentLanguage: string | null;

export default function getLocale(defaultLanguage = _defaultLanguage): string {
  if (currentLanguage) {
    return currentLanguage;
  }

  for (const locale of getLocales()) {
    const localeName = availableLocales.get(locale);
    if (localeName) {
      currentLanguage = localeName;
      return localeName;
    }
  }
  currentLanguage = defaultLanguage;
  return defaultLanguage;
}

export function getTranslationsObject() {
  return translations;
}

export async function maybeLoadLocale(
  locale: string,
  loadLocale: LocaleLoaderFn,
) {
  if (
    availableLocales.has(locale) &&
    !translations[locale] &&
    locale !== _defaultLanguage
  ) {
    translations[locale] = await loadLocale(locale);
  }
}
