import { ReactNode } from 'react'

export type SessionContextControllerProps = {
  children: ReactNode
}

export const DonationFormStep = {
  SELECT_AMOUNT: 'SELECT_AMOUNT',
  SELECT_DONOR_DETAILS: 'SELECT_DONOR_DETAILS',
  SELECT_PAYMENT_METHOD: 'SELECT_PAYMENT_METHOD',
  PAYMENT_PROCESSING: 'PAYMENT_PROCESSING',
  PAYMENT_ERROR: 'PAYMENT_ERROR',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  ERROR: 'ERROR',
  COMPLETE: 'COMPLETE'
}

export type DonationFormStepType = (typeof DonationFormStep)[keyof typeof DonationFormStep]
