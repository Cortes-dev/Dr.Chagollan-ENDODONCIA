import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale es una Promise que resuelve al locale detectado (de la cookie o default)
  let locale = await requestLocale;

  // Fallback seguro
  if (!locale || !['en', 'es'].includes(locale as string)) {
    locale = 'es';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});