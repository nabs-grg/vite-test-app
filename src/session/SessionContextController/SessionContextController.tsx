import { useMemo, useState } from 'react'

import { SessionContext } from '../SessionContext/SessionContext'
import { Session } from '../SessionContext/SessionContext.types'

import { DonationFormStep, SessionContextControllerProps } from './SessionContextController.types'

export function SessionContextController({ children }: SessionContextControllerProps) {
  const [session, setSession] = useState<Partial<Session> | undefined>(undefined)
  const [sessionProgressStep, setSessionProgressStep] = useState(DonationFormStep.SELECT_AMOUNT)
  const [sessionProgressStack, setSessionProgressStack] = useState([DonationFormStep.SELECT_AMOUNT])
  const [invalidRecurringPaymentEmail, setInvalidRecurringPaymentEmail] = useState<string | undefined>(undefined)

  const sessionValues = useMemo(
    () => ({
      session,
      setSession,
      sessionProgressStep,
      setSessionProgressStep,
      sessionProgressStack,
      setSessionProgressStack,
      invalidRecurringPaymentEmail,
      setInvalidRecurringPaymentEmail
    }),
    [session, sessionProgressStep, sessionProgressStack, invalidRecurringPaymentEmail]
  )

  return <SessionContext.Provider value={sessionValues}>{children}</SessionContext.Provider>
}
