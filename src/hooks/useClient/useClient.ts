import { ClientContext } from '@/client/clientContext/ClientContext'
import { useContext } from 'react'

export const useClient = () => {
  const context = useContext(ClientContext)

  if (context === undefined) {
    throw new Error('ClientContext must be within ClientProvider')
  }

  return context
}
