// import { Box, CircularProgress } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'

// import * as Styles from '../../DonationForm.styles'
// import { useNavigationStack } from '../../useNavigationStack/useNavigationStack'
// import { DonationFormStep } from '../../DonationForm.types'

// import { Button, Checkbox } from '@percent/hosted-donation-gateway/ui'
// import { useCurrency } from '@percent/hosted-donation-gateway/hooks/useCurrency/useCurrency'
// import { useLogger } from '@percent/hosted-donation-gateway/hooks/useLogger/useLogger'
// import { usePartnerConfig } from '@percent/hosted-donation-gateway/hooks/usePartnerConfig/usePartnerConfig'
// import { usePaymentStatus } from '@percent/hosted-donation-gateway/hooks/usePaymentStatus/usePaymentStatus'
// import { getSupportedCurrencyInformationFromConfig } from '@percent/hosted-donation-gateway/helpers/getSupportedCurrencyInformation'
// import { formatAmount } from '@percent/hosted-donation-gateway/helpers/formatAmount'
// import { isErrorCodeSessionExpired } from '@percent/hosted-donation-gateway/helpers/isErrorCodeSessionExpired'
// import { parseFloatForCommaAndDotSeparator } from '@percent/hosted-donation-gateway/helpers/parseFloatForCommaAndDotSeparator'
// import { useAnalyticsService } from '@percent/hosted-donation-gateway/hooks/useAnalyticsService/useAnalyticsService'
// import { useToken } from '@percent/hosted-donation-gateway/hooks/useToken/useToken'
// import { formatToMinorUnits } from '@percent/hosted-donation-gateway/helpers/formatToMinorUnits'
// import { createUpdateHostedDonationActionForAccount } from '@percent/hosted-donation-gateway/api/actions/createOrUpdateHostedDonationActionForAccount/createOrUpdateHostedDonationActionForAccount'
// import { useMutation } from '@percent/hosted-donation-gateway/hooks/useMutation/useMutation'
// import { useSession } from '@percent/hosted-donation-gateway/hooks/useSession/useSession'
// import { usePostMessage } from '@percent/hosted-donation-gateway/hooks/usePostMessage/usePostMessage'
// import { createMoney, CurrencyCode } from '@percent/utility'
import { Box, Button } from '@mantine/core'

export function StripePayment({
  setIsSubmitting,
  isSubmitting,
  setShowLoader,
  onLoadError,
  nextStep
}: {
  setIsSubmitting: Dispatch<SetStateAction<boolean>>
  isSubmitting: boolean
  setShowLoader: (showLoader: boolean) => void
  onLoadError: () => void
  nextStep?: () => void
}) {
  const stripe = useStripe()
  const elements = useElements()
  const { getValues } = useFormContext()
  // const { setPaymentStatus, setPaymentCompleted } = usePaymentStatus()
  const [stripePaymentElementValid, setStripePaymentElementValid] = useState(false)
  // const { logError } = useLogger()
  // const { partnerConfig } = usePartnerConfig()

  console.log('select payment')

  const handlePaymentSubmit = async () => {
    setIsSubmitting(true)

    if (stripe && elements) {
      try {
        // await createOrUpdate()

        const res = await stripe.confirmPayment({
          elements,
          redirect: 'if_required'
        })

        // track({
        //   event: 'Select Payment Method Page Submitted'
        // })

        if (res.paymentIntent?.status === 'succeeded') {
          // setPaymentStatus({
          //   statusName: res.paymentIntent?.status,
          //   error: undefined,
          //   paymentProvider: 'stripe'
          // })
          // setPaymentCompleted()
          // sendDonationCompletedMessage({
          //   amount: createMoney(
          //     parseFloatForCommaAndDotSeparator(getValues('amount')),
          //     currencyInfo.code as CurrencyCode
          //   ),
          //   matchedAmount: getValues('matchedAmount'),
          //   firstName: getValues('firstName'),
          //   anonymous: getValues('anonymous')
          // })
          // handleNext(DonationFormStep.COMPLETE)
          nextStep!()
        } else if (res.error) {
          // setPaymentStatus({
          //   statusName: undefined,
          //   error: res.error.decline_code,
          //   paymentProvider: 'stripe'
          // })
          // handleNext(DonationFormStep.PAYMENT_ERROR)
        } else {
          // handleNext(DonationFormStep.PAYMENT_PROCESSING)
        }
      } catch (error) {
        console.log(error)
      }
      setIsSubmitting(false)
    }
  }

  // const isButtonDisabled = () => {
  //   if (process.env.NX_REACT_APP_ENV === 'Test') {
  //     return isSubmitting
  //   }

  //   return !stripePaymentElementValid || isSubmitting
  // }

  const donateTextKey =
    getValues('sequenceType') === 'monthly'
      ? 'hosted_donation_gateway.paymentStep.buttonMonthly'
      : 'hosted_donation_gateway.paymentStep.button'
  console.log(stripePaymentElementValid, donateTextKey)

  return (
    <>
      <Box>
        <PaymentElement
          options={{
            terms: {
              card: 'never'
            }
          }}
          onChange={e => setStripePaymentElementValid(e.complete)}
          onReady={() => {
            setTimeout(() => {
              setShowLoader(false)
            }, 320)
          }}
          onLoadError={onLoadError}
        />
      </Box>

      {/* {partnerConfig?.accountId ? (
        <Box sx={Styles.CheckboxWrapperPaymentPage}>
          {partnerConfig?.askAnonymity === false ? null : (
            <Controller
              name="anonymous"
              control={control}
              render={({ field: { name, value, onChange } }) => (
                <Checkbox
                  disabled={isSubmitting}
                  name={name}
                  label={t('hosted_donation_gateway.paymentStep.form.anonymousCheckboxText')}
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
          )}

          <Controller
            name="consentedToBeContactedByOrg"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <Checkbox
                disabled={isSubmitting}
                name={name}
                label={t('hosted_donation_gateway.paymentStep.form.contactCheckboxText', {
                  foundation: partnerConfig?.organisation.name
                })}
                checked={value}
                onChange={onChange}
              />
            )}
          />
        </Box>
      ) : null} */}

      <Box>
        <Button name="submit" onClick={handlePaymentSubmit}>
          {isSubmitting ? 'Loadingg' : <span>Donate</span>}
        </Button>
      </Box>
    </>
  )
}
