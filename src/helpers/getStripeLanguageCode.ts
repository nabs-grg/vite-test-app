import { StripeElementLocale } from '@stripe/stripe-js'

// localisation codes from Loco Translate that do not match the Stripe ones
// they can work only if we convert them to basic language code: 'de-DE' -> 'de'
const unsupportedLocalizedLangCodes = [
  'da-DK',
  'de-DE',
  'de-CH',
  'en-CA',
  'en-US',
  'en-IE',
  'en-SG',
  'es-ES',
  'fr-FR',
  'it-IT',
  'ja-JP',
  'ko-KR',
  'nl-BE',
  'nl-NL',
  'pl-PL',
  'sv-SE'
]

export const getStripeLanguageCode = (langCode: string): StripeElementLocale => {
  if (unsupportedLocalizedLangCodes.includes(langCode)) {
    return langCode.substring(0, langCode.indexOf('-')) as StripeElementLocale
  }

  return langCode as StripeElementLocale
}
