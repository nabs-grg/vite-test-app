import { useMemo, useState } from 'react'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
// import { useTranslation } from 'react-i18next'
import { createStyles } from '@mantine/emotion'

// import * as Styles from '../../DonationForm.styles'
// import { useNavigationStack } from '../../useNavigationStack/useNavigationStack'
// import { DonationFormStep } from '../../DonationForm.types'

// import { theme } from '@percent/hosted-donation-gateway/theme/theme'
// import { usePartnerConfig } from '@percent/hosted-donation-gateway/hooks/usePartnerConfig/usePartnerConfig'
// import { useSession } from '@percent/hosted-donation-gateway/hooks/useSession/useSession'
// import { StripePayment } from './StripePayment'
// import { Card, Link } from '@percent/hosted-donation-gateway/ui'
import { Box } from '@mantine/core'
import { useSession } from '@/hooks/useSession/useSession'
import { getStripeLanguageCode } from '@/helpers/getStripeLanguageCode'
import { StripePayment } from './StripePayment'
import { UserInformationProps } from './UserInformation'
// import { SelectPaymentMethodSkeleton } from './SelectPaymentMethodSkeleton'

const useStyles = createStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    height: '100%',

    '.StripeElement': {
      width: '100%'
    },

    '& > .MuiBox-root': {
      color: 'green'
    },

    '.MuiButton-root': {
      width: '100%',
      marginTop: '32px'
    }
  }
}))

export function SelectPaymentMethod({ nextStep }: UserInformationProps) {
  const { session } = useSession()
  const { classes } = useStyles()
  //   const { handleBack, handleNext } = useNavigationStack()
  //   const { partnerConfig } = usePartnerConfig()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  console.log(showLoader)

  const stripePromise = useMemo(() => {
    return loadStripe(
      'pk_test_51LiLx0CEma7Ktb2NezCLEKy890bXMlTPaGan0MIxID6kVpwvnnsLEzvqUb0hXxHly5MIkNmWWMxddGVesGzpaiDu0030kGXE9m',
      {
        stripeAccount: session?.stripeAccount
      }
    )
  }, [session?.stripeAccount])

  const stripeOptions: StripeElementsOptions = useMemo(() => {
    return {
      clientSecret: session?.clientSecret,
      fonts: [
        {
          cssSrc: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
        }
      ],
      appearance: {
        labels: 'floating',
        variables: {
          fontSizeBase: '14px'
        }
        // abilities: {
        //   ...Styles.StripePayment('red')
        // }
      },
      locale: getStripeLanguageCode('en-GB')
    }
  }, [session?.clientSecret])

  return (
    <>
      {/* {showLoader ? (
        <SelectPaymentMethodSkeleton withCheckboxes={!!partnerConfig?.accountId && !!partnerConfig?.askAnonymity} />
      ) : null} */}
      {/* <Card shouldContainBackButton> */}
      <Box className={classes.root}>
        <Elements stripe={stripePromise} options={stripeOptions}>
          <StripePayment
            setIsSubmitting={setIsSubmitting}
            isSubmitting={isSubmitting}
            setShowLoader={setShowLoader}
            onLoadError={() => console.log('error')}
            nextStep={nextStep}
          />
        </Elements>
      </Box>

      {/* <Typography
          variant="body2"
          style={{
            marginTop: 20
          }}
        >
          <Link
            name="change personal details"
            sx={Styles.Link()}
            style={{
              fontSize: '0.825rem'
            }}
            onClick={() => {
              if (isSubmitting) {
                return
              }
              handleBack()
            }}
          >
            {partnerConfig?.accountId
              ? t('hosted_donation_gateway.paymentStep.changeAmount')
              : t('hosted_donation_gateway.paymentStep.changePersonalDetails')}
          </Link>
        </Typography> */}
      {/* </Card> */}
    </>
  )
}
