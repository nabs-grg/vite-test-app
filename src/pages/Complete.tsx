import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { Box } from '@mantine/core'
// import { createMoney, formatMoney, Money, sumMoney } from '@/api/money/money'

import { SuccessAnimation } from './successAnimation/SucessAnimation'

export function Complete() {
  const { getValues, watch } = useFormContext()
  const [timer, setTimer] = useState(10)
  const [donorName, email, amount, matchedAmount] = watch(['firstName', 'email', 'amount', 'matchedAmount'])

  console.log(donorName, email, matchedAmount, getValues)
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1)
      } else {
        clearInterval(interval)
        // partnerConfig?.successUrl && handleRedirection(partnerConfig.successUrl)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [setTimer, timer])

  return (
    <>
      <Box>
        <Box>
          <SuccessAnimation />
          <p>Thank you for your support</p>
          <p></p>

          <Box>
            <Box>
              <p>Total donated</p>
              <p data-testid="totalDonated">{amount}</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
