import { ClientResponse } from '@/api/types/types'
import { apiUrl } from '../../url'

// import { QueryFn } from '@percent/hosted-donation-gateway/hooks/useQuery/useQuery.types'
// import { ClientResponse } from '@percent/hosted-donation-gateway/api/types/types'
import { GetDonationSessionDetailsActionResponse } from './getDonationSessionDetailsAction.types'
import { QueryFn } from '@/hooks/useQuery/useQuery.types'

export const getDonationSessionDetailsAction: QueryFn<
  [string, string],
  ClientResponse<GetDonationSessionDetailsActionResponse>
> = (client, [_, id]) => client.get(`${apiUrl}/donation-sessions/${id}/details`)
