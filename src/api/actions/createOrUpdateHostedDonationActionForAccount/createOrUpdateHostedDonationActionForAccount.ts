import { MutationFn } from '@/hooks/useMutation/useMutation.types'
import { apiUrl } from '../../url'

import {
  CreateUpdateHostedDonationForAccountResponse,
  CreateUpdateHostedDonationForAccountArguments
} from './createOrUpdateHostedDonationActionForAccount.types'
import { AxiosError, ClientResponse } from '@/api/types/types'

export const createUpdateHostedDonationActionForAccount =
  (
    sessionId: string
  ): MutationFn<
    CreateUpdateHostedDonationForAccountArguments,
    ClientResponse<CreateUpdateHostedDonationForAccountResponse>,
    AxiosError
  > =>
  (params: CreateUpdateHostedDonationForAccountArguments) => ({
    endpoint: `${apiUrl}/donation-sessions/${sessionId}/hosted-donations`,
    method: 'PUT',
    params
  })
