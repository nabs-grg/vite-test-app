import { SessionContext } from '@/session/SessionContext/SessionContext'
import { useContext } from 'react'

export const useSession = () => {
  const context = useContext(SessionContext)

  if (context === undefined) {
    throw new Error('useSession must be used within a SessionContextController')
  }

  return context
}
