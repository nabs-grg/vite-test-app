export type CreateUpdateHostedDonationArguments = {
  currency: string
  amount: number
  firstName: string
  lastName: string
  email: string
  language: string
  anonymous: 'yes' | 'no'
  consentedToBeContactedByOrg: 'yes' | 'no'
  sequenceType: 'one_time' | 'monthly'
}

export type CreateUpdateHostedDonationResponse = {
  data: {
    paymentIntent: {
      externalId: string
      clientSecret: string
    }
    foundation: {
      stripeAccount: string
    }
    donation: {
      id: string
    }
  }
  error: {
    code: string
    title: string
    message: string
  }
}
