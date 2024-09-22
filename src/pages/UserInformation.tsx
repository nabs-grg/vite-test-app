import { Button, TextInput } from '@mantine/core'
import { Checkbox } from '@mantine/core'
import { Controller, useFormContext } from 'react-hook-form'
import { FormFieldValues } from './SelectAmount'
import { useToken } from '@/hooks/useToken/useToken'
import { useMutation } from '@/hooks/useMutation/useMutation'
import { createUpdateHostedDonationAction } from '@/api/actions/createOrUpdateHostedDonationAction/createOrUpdateHostedDonationAction'
import { useState } from 'react'
import { useSession } from '@/hooks/useSession/useSession'

export type UserInformationProps = {
  prevStep?: () => void
  nextStep?: () => void
}

const UserInformation = ({ prevStep, nextStep }: UserInformationProps) => {
  const {
    getValues,
    setValue,
    control,
    watch,
    formState: { errors }
  } = useFormContext<FormFieldValues>()
  const { donationSessionId } = useToken()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setSession } = useSession()

  console.log(setValue, errors)

  console.log(watch, isSubmitting, getValues('amount'), donationSessionId, 'active')

  const createUpdateDonationMutation = useMutation(
    ['createOrUpdateHostedDonationAction'],
    createUpdateHostedDonationAction(donationSessionId)
  )

  const createOrUpdate = async () =>
    createUpdateDonationMutation.mutateAsync({
      currency: 'GBP',
      amount: Number(getValues('amount')),
      firstName: getValues('firstName'),
      lastName: getValues('lastName'),
      email: getValues('email'),

      language: 'en-GB',
      anonymous: 'no',
      consentedToBeContactedByOrg: 'no',
      sequenceType: 'one_time'
    })

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // setShouldDisplayRecurringDonationEmailErr(false)
      // setInvalidRecurringPaymentEmail(undefined)
      const res = await createOrUpdate()
      const { paymentIntent, foundation, donation } = res.data.data

      console.log(paymentIntent, foundation, donation)

      setSession({
        sessionDonationId: donation.id,
        clientSecret: paymentIntent.clientSecret,
        stripeAccount: foundation.stripeAccount
      })

      /* don't need */
      // track({
      //   event: 'Select Donor Details Page Submitted',
      //   properties: {
      //     consent: hasConsentToBeContactedByOrg(),
      //     anonymous: isAnonymous()
      //   }
      // })

      nextStep!()
    } catch (e) {
      console.log(e, 'error')
      // if (e?.response?.data?.error?.code === 'donation/currency_mismatch') {
      //   // setRecurringDonationEmailErr()
      // } else {
      //   // logError(e)
      //   // handleErrorRedirection(e as AxiosError)
      // }
    }
    setIsSubmitting(false)
  }

  return (
    <div>
      {' '}
      <Controller
        name="firstName"
        control={control}
        render={({ field: { name, value, onChange, onBlur } }) => (
          <TextInput
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
            onBlur={onBlur}
            label="First name"
            // errorMessage={errors.firstName?.message ? t(errors.firstName.message) : undefined}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field: { name, value, onChange, onBlur } }) => (
          <TextInput
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
            onBlur={onBlur}
            label="Last name"
            // errorMessage={errors.lastName?.message ? t(errors.lastName.message) : undefined}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { name, value, onChange, onBlur } }) => (
          <TextInput
            name={name}
            value={value}
            onChange={event => {
              onChange(event)
              // checkForRecurringDonationEmailErr()
            }}
            onBlur={onBlur}
            onKeyPress={e => {
              if (e.code === 'Space') {
                e.preventDefault()
              }
            }}
            label="Email"
            // errorMessage={
            //   errors.email?.message
            //     ? t(errors.email.message)
            //     : shouldDisplayRecurringDonationEmailErr
            //       ? invalidRecurringDonationEmailErr
            //       : undefined
            // }
            type="email"
          />
        )}
      />
      {/* <p>First name</p>
      <Input type="text" />
      <p>Last name</p>
      <Input type="text" />
      <p>Email</p>
      <Input type="text" /> */}
      <Checkbox defaultChecked label="Hide my name on the fundraising timeline" />
      <Checkbox label="Get updates from Oxfam about their organisation" />
      {/* <Link to="/user-information"> */}
      <Button onClick={handleSubmit}>Next</Button>
      {/* </Link> */}
      {/* <p>Express donation</p> */}
      {/* <Link to="/"> */}
      <Button onClick={prevStep}>Change amount</Button>
      {/* </Link> */}
    </div>
  )
}

export default UserInformation
