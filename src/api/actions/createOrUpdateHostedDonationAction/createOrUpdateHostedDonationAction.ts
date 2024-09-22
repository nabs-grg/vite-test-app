import { MutationFn } from '@/hooks/useMutation/useMutation.types'
import { apiUrl } from '../../url'

// import { MutationFn } from '@percent/hosted-donation-gateway/hooks/useMutation/useMutation.types'
// import { AxiosError, ClientResponse } from '@percent/hosted-donation-gateway/api/types/types'
import {
  CreateUpdateHostedDonationResponse,
  CreateUpdateHostedDonationArguments
} from './createOrUpdateHostedDonationAction.types'
import { AxiosError, ClientResponse } from '@/api/types/types'

export const createUpdateHostedDonationAction =
  (
    sessionId: string
  ): MutationFn<CreateUpdateHostedDonationArguments, ClientResponse<CreateUpdateHostedDonationResponse>, AxiosError> =>
  (params: CreateUpdateHostedDonationArguments) => ({
    endpoint: `${apiUrl}/donation-sessions/${sessionId}/hosted-donations`,
    method: 'PUT',
    params
  })
