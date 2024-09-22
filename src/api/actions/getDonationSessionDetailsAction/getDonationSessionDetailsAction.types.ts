import { CurrencyCode } from '@/api/money/currency'
import { Money } from '@/api/money/money'

export type CurrencyInfo = {
  code: string
  name: string
  minimum: number
  maximum: number
  defaultValue: number
  symbol: string
  encodedSymbol: string
  minorUnits: number
  flagCode: string
  presetAmounts?: number[]
}

export const PaymentIntentStatus = {
  PaymentRequired: 'payment_required',
  Processing: 'processing',
  PaymentSucceeded: 'payment_succeeded'
}

export type MatchingType = 'multiply'

type CurrencyConversion = Readonly<{
  fxId: string
  rate: number
  source: Money
  target: Money
}>

type ConversionTarget = 'donation' | 'account' | 'partner'
type TargetConversions = Partial<Record<ConversionTarget, CurrencyConversion>>

type BaseMatching = {
  limit?: Money
  limitConversions?: TargetConversions
}

export type MultiplyMatching = BaseMatching & {
  kind: 'multiply'
  multiply: {
    factor: number
  }
}

export type Matching = MultiplyMatching

export type PaymentProvider = 'stripe' | 'paypal' | 'donation_wallet'
export type PayPalPaymentConfig = { supportedCurrencies: CurrencyCode[] }
export type WalletPaymentConfig = { balance: Money }

export type DonationSessionDetails = {
  id: string
  currency: CurrencyCode | null
  currencyInformation: CurrencyInfo[]
  paymentIntent?: {
    id: string
    status: (typeof PaymentIntentStatus)[keyof typeof PaymentIntentStatus]
    amount: number
    currency: CurrencyCode
    clientSecret: string
    createdAt: string
  }
  foundation: {
    id: string
    name: string
    registryId: string
    stripeAccount: string
  }
  donation?: {
    donationId: string
  }
  organisation: {
    id: string
    registryId: string
    name: string
    logo?: string
  }
  partner: {
    id: string
    name: string
  }
  branding: {
    primaryColor: string
    logo: string
  }
  ui?: {
    showFooter: boolean
    showTermsWhenAccount: boolean
    widgetMode: boolean
  }
  matchingRules?: Matching[]
  successUrl: string
  language: string | null
  createdAt: string
  expiresAt: string
  status: 'open' | 'completed' | 'expired'
  askAnonymity?: boolean
  allowSubscription?: boolean
  sequenceType?: 'one_time' | 'monthly'
  accountId?: string
  paymentProviders?: Array<PaymentProvider>
  paypal?: PayPalPaymentConfig
  wallet?: WalletPaymentConfig
}

export type GetDonationSessionDetailsActionResponse = {
  data: DonationSessionDetails
  object: string
}
