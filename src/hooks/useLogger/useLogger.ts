import { LoggerContext } from '@/logger/LoggerContext/LoggerContext'
import { useContext } from 'react'

export const useLogger = () => {
  const context = useContext(LoggerContext)

  if (context === undefined) {
    throw new Error('useLogger must be used within a LoggerContextController')
  }

  return context
}
