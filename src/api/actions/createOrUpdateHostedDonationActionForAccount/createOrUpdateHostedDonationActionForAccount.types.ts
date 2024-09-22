export type CreateUpdateHostedDonationForAccountArguments = {
  currency: string
  amount: number
  language: string
  anonymous?: 'yes' | 'no'
  consentedToBeContactedByOrg?: 'yes' | 'no'
  sequenceType: 'one_time' | 'monthly'
}

export type CreateUpdateHostedDonationForAccountResponse = {
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
