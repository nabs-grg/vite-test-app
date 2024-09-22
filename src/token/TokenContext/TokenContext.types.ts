type TokenContextState = {
  sessionToken: string | undefined
  tokenError: boolean
  donationSessionId: string
  shouldPersistTokenInUrl: boolean
}

export type TokenContextType = TokenContextState & {
  setTokenContext: (_: TokenContextState) => void
}
