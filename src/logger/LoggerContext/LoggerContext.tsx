import { createContext } from 'react'

import { LoggerContextType } from './LoggerContext.types'

export const LoggerContext = createContext<LoggerContextType | undefined>(undefined)
