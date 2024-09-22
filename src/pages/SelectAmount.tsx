import { Button, ButtonGroup, Tabs, Text } from '@mantine/core'
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form'
import InfoIcon from '@/assets/info.svg'
import { Link } from 'react-router-dom'
import { CurrencyCode } from './Currency'
import CurrencyInput from 'react-currency-input-field'
import { useState } from 'react'
import { Stepper, Group } from '@mantine/core'
import UserInformation from './UserInformation'
import { SelectPaymentMethod } from './SelectPaymentMethod'
import { useToken } from '@/hooks/useToken/useToken'
// import { useQuery } from '@tanstack/react-query'
import { useQuery } from '@/hooks/useQuery/useQuery'
import { getDonationSessionDetailsAction } from '@/api/actions/getDonationSessionDetailsAction/getDonationSessionDetailsAction'
import { useMutation } from '@/hooks/useMutation/useMutation'
import { createUpdateHostedDonationActionForAccount } from '@/api/actions/createOrUpdateHostedDonationActionForAccount/createOrUpdateHostedDonationActionForAccount'
import { Complete } from './Complete'
import PercentLogo from '../assets/percent-logo-page.svg'

// interface IFormInputs {
//   CurrencyField: string
//   // MyCheckbox: boolean
// }

export type Money = {
  amount: number
  currency: CurrencyCode
}

export type FormFieldValues = {
  amount: string
  email: string
  firstName: string
  lastName: string
  anonymous: boolean
  consentedToBeContactedByOrg: boolean
  sequenceType: 'one_time' | 'monthly'
  matchedAmount?: Money
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SelectAmount({ setSchema }: { setSchema: any }) {
  const methods = useForm()
  const { tokenError, donationSessionId, sessionToken, shouldPersistTokenInUrl } = useToken()
  const [isLoading, setIsLoading] = useState(false)

  console.log(tokenError, donationSessionId, 'okenError, donationSessionId')

  /* donation session id */
  const {
    data,
    isLoading: isLoadingAPi,
    error
  } = useQuery(['getDonationSessionDetailsAction', donationSessionId], getDonationSessionDetailsAction, {
    enabled: !!donationSessionId
  })

  console.log(
    data,
    isLoadingAPi,
    error,
    sessionToken,
    shouldPersistTokenInUrl,
    ' data, isLoading, sessionToken, shouldPersistTokenInUrl, error'
  )

  // const {
  //   // getValues,
  //   // setValue,
  //   // control,
  //   // watch
  //   // formState: { errors }
  // } = useFormContext<FormFieldValues>()
  // const [amount, sequenceType] = watch(['amount', 'sequenceType'])
  // const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data)

  const [active, setActive] = useState(0)
  const nextStep = () =>
    setActive(current => {
      console.log(current, 'current')
      return current < 3 ? current + 1 : current
    })
  const prevStep = () => setActive(current => (current > 0 ? current - 1 : current))

  const {
    getValues,
    setValue,
    control,
    watch,
    formState: { errors }
  } = useFormContext<FormFieldValues>()

  // const { donationSessionId, sessionToken, shouldPersistTokenInUrl } = useToken()

  console.log(setValue, isLoading, setSchema)
  const createUpdateDonationMutation = useMutation(
    ['createOrUpdateHostedDonationAction'],
    createUpdateHostedDonationActionForAccount(donationSessionId),
    {},
    { withCredentials: true }
  )

  const createOrUpdate = async () =>
    createUpdateDonationMutation.mutateAsync({
      currency: 'GBP',
      amount: Number(getValues('amount')),
      language: 'en-GB',
      anonymous: 'no',
      consentedToBeContactedByOrg: 'no',
      sequenceType: 'one_time'
    })

  const handleNavigateNext = async () => {
    // if (partnerConfig?.accountId) {
    console.log(data?.data?.data?.accountId, 'data?.data?.data?.accountId')
    if (data?.data?.data?.accountId) {
      setIsLoading(true)

      try {
        const res = await createOrUpdate()
        const { paymentIntent, foundation, donation } = res.data.data

        console.log(paymentIntent, foundation, donation, 'paymentIntent, foundation, donation')
        /* maybe important */
        //  setSession({
        //    sessionDonationId: donation.id,
        //    clientSecret: paymentIntent.clientSecret,
        //    stripeAccount: foundation.stripeAccount
        //  })

        //  track({
        //    event: 'Select Amount Page Submitted',
        //    properties: {
        //      amount: getValues('amount'),
        //      currency: currencyInfo.code,
        //      sequenceType: getValues('sequenceType')
        //    }
        //  })

        //  handleNext(DonationFormStep.SELECT_PAYMENT_METHOD)
        nextStep()
      } catch (e) {
        setIsLoading(false)
        // logError(e)
      }
    } else {
      nextStep()
    }
  }

  console.log(watch, getValues('amount'), 'active')

  // 2000 'GBP' 'en-GB' 'no' 'uk'

  return (
    <div style={{ maxWidth: '448px' }}>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step>
          {/* <h1 className={styles.red}>Oxfam</h1> */}
          <PercentLogo />
          <Link to="/profile">
            <p>Learn more</p>
          </Link>
          <Tabs defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" className="">
                One time
              </Tabs.Tab>
              <Tabs.Tab value="messages">Monthly</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">One time donation</Tabs.Panel>

            <Tabs.Panel value="messages">Monthly donation</Tabs.Panel>
          </Tabs>
          <ButtonGroup>
            <Button>£10</Button>
            <Button variant="default">£20</Button>
            <Button variant="default">£50</Button>
            <Button variant="default">£100</Button>
          </ButtonGroup>
          <FormProvider {...methods}>
            {/* <Controller
              name="sequenceType"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            /> */}
            <Controller
              name="amount"
              control={control}
              render={({ field: { name, onBlur, onChange } }) => (
                <CurrencyInput
                  id="input-example"
                  name={name}
                  // value={value.toString()}
                  // onValueChange={inputValue => {
                  //   handleChange(inputValue)
                  // }}
                  onBlur={onBlur}
                  placeholder="Please enter a number"
                  defaultValue={10}
                  decimalsLimit={2}
                  onValueChange={(value, name, values) => {
                    console.log(value, name, values, 'number')
                    onChange(values?.float)
                  }}
                />
              )}
            />
            {errors.amount && <Text>This is required.</Text>}
            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
          </FormProvider>
          <InfoIcon />
          <p>
            All donations are made to the Intelligent Foundation, registered Charity No. 1192508. The charity you have
            recommended should receive the money within 45 days of your donation.
          </p>
          <p>By continuing, you accept the terms of service and privacy policy. Fees will apply.</p>
          {/* <Link to="/user-information"> */}
          <Button onClick={handleNavigateNext}>Next</Button>
          {/* </Link> */}
          <p>Express donation</p>
          <Button>Paypal</Button>
        </Stepper.Step>
        <Stepper.Step>
          {/* <FormProvider {...methods}> */}
          <UserInformation nextStep={nextStep} prevStep={prevStep} />
          {/* </FormProvider> */}
        </Stepper.Step>
        <Stepper.Step>
          <SelectPaymentMethod nextStep={nextStep} />
        </Stepper.Step>
        <Stepper.Completed>
          <Complete />
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        {/* <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button> */}
      </Group>
    </div>
  )
}

export default SelectAmount
