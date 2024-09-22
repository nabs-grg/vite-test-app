import { createContext } from 'react'

import { SessionContextType } from './SessionContext.types'

export const SessionContext = createContext<SessionContextType | undefined>(undefined)
