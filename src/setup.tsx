import { IntlVariations, setupFbtee } from 'fbtee';
import getLocale, {
  getTranslationsObject,
  setClientLocale,
} from './i18n/getLocale.tsx';
import ja_JP from './translations/ja_JP.json' with { type: 'json' };

setupFbtee({
  hooks: {
    getViewerContext: () => ({
      GENDER: IntlVariations.GENDER_UNKNOWN,
      locale: getLocale(),
    }),
  },
  translations: getTranslationsObject(),
});

setClientLocale('ja_JP', async (locale) => {
  if (locale === 'ja_JP') {
    return ja_JP.ja_JP;
  }
  return {};
});
