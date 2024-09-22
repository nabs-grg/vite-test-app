// import { LearnMore } from '@/pages/LearnMore'
import SelectAmount, { FormFieldValues } from '@/pages/SelectAmount'
// import UserInformation from '@/pages/UserInformation'
import { ReactElement, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
// import { useRoutes } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

export const AppRoute = {
  HOME: '/',
  DONATE: '/donate',
  NONPROFIT_PROFILE_PAGE: '/organisations/:nonprofit_id/profile',
  ABOUT_PERCENT_PAGE: '/about-percent',
  TERMS: '/terms',
  PRIVACY_POLICY: '/privacy-policy',
  SERVICE_FEES: '/service-fees',
  NOT_FOUND: '*',
  DONATION_LINK: '/links/:reference'
}

const SESSION_PATH = '/session'

export type RouteType = {
  path: string
  element: ReactElement
}

// const routeList: RouteType[] = [
//   {
//     path: '/',
//     element: <SelectAmount />
//   },
//   {
//     path: '/user-information',
//     element: <UserInformation />
//   },
//   {
//     path: '/profile',
//     element: <LearnMore />
//   }
// ]

// export const useHistoryNav = () => {
//   const history = useHistory()
//   const location = useLocation()
//   const { setSessionProgressStack } = useSession()
//   const locationAddress = location.pathname + location.search

//   useEffect(() => {
//     history.push(locationAddress)
//   }, [])

//   useEffect(() => {
//     const unlisten = history.listen((_: any) => {
//       if (history.action === 'POP') {
//         setSessionProgressStack(handleBackStateAction(history, locationAddress))
//       }
//     })

//     return () => unlisten()
//   }, [])

//   return {}
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DonationSessionRoutes({ methods, setSchema }: { methods: any; setSchema: any }) {
  // useHistoryNav()

  return (
    <>
      <Routes>
        <Route
          path={AppRoute.DONATE}
          element={
            <FormProvider {...methods}>
              <SelectAmount setSchema={setSchema} />
            </FormProvider>
          }
        ></Route>
      </Routes>
      {/* <Route path={`${SESSION_PATH}${AppRoute.NONPROFIT_PROFILE_PAGE}`} exact>
        <RouteCheck>
          <NonprofitProfilePage shouldContainBackButton />
        </RouteCheck>
      </Route>
      <Route path={`${SESSION_PATH}${AppRoute.ABOUT_PERCENT_PAGE}`} exact>
        <RouteCheck>
          <AboutPercent shouldContainBackButton />
        </RouteCheck>
      </Route>
      <Route path={`${SESSION_PATH}${AppRoute.TERMS}`} exact>
        <RouteCheck>
          <Terms shouldContainBackButton />
        </RouteCheck>
      </Route>
      <Route path={`${SESSION_PATH}${AppRoute.PRIVACY_POLICY}`} exact>
        <RouteCheck>
          <PrivacyPolicy shouldContainBackButton />
        </RouteCheck>
      </Route>
      <Route path={`${SESSION_PATH}${AppRoute.SERVICE_FEES}`} exact>
        <RouteCheck>
          <NewFees shouldContainBackButton />
        </RouteCheck>
      </Route> */}
    </>
  )
}

export function AppRoutes() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [schema, setSchema] = useState<any>()
  const methods = useForm<FormFieldValues>({
    defaultValues: {
      amount: '',
      email: '',
      firstName: '',
      lastName: '',
      anonymous: false,
      consentedToBeContactedByOrg: false,
      sequenceType: 'one_time',
      matchedAmount: undefined
    },
    resolver: schema ? yupResolver(schema) : undefined,
    mode: 'all',
    reValidateMode: 'onChange'
  })

  return (
    <Routes>
      <Route
        path={AppRoute.HOME}
        element={
          <FormProvider {...methods}>
            <SelectAmount setSchema={setSchema} />
          </FormProvider>
        }
      />
      <Route path={AppRoute.DONATE} element={<DonationSessionRoutes methods={methods} setSchema={setSchema} />}></Route>
      <Route path={SESSION_PATH} element={<DonationSessionRoutes methods={methods} setSchema={setSchema} />}></Route>
    </Routes>
  )
}
