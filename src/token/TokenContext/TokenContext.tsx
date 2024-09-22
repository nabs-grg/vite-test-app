import { createContext } from 'react'

import { TokenContextType } from './TokenContext.types'

export const TokenContext = createContext<TokenContextType | undefined>(undefined)
