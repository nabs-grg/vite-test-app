import { Dispatch, SetStateAction } from 'react'
import { DonationFormStepType } from '../SessionContextController/SessionContextController.types'

export type SessionCompleted = 'true'

export type Session = {
  sessionDonationId: string
  clientSecret: string
  stripeAccount: string
}

export type SessionContextType = {
  session: Partial<Session> | undefined
  setSession: Dispatch<SetStateAction<Partial<Session> | undefined>>
  sessionProgressStep: DonationFormStepType
  setSessionProgressStep: Dispatch<SetStateAction<DonationFormStepType>>
  setSessionProgressStack: Dispatch<SetStateAction<DonationFormStepType[]>>
  sessionProgressStack: DonationFormStepType[]
  invalidRecurringPaymentEmail?: string
  setInvalidRecurringPaymentEmail: Dispatch<SetStateAction<string | undefined>>
}
