// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import '@/App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'

// import { ReactComponent as InfoIcon } from '@percent/hosted-donation-gateway/common/assets/icons/info.svg'

// import { MantineProvider } from '@mantine/core'
import { AppRoutes } from './routes/AppRoutes'
import { Layout } from './layout/Layout'
import { TokenContextController } from './token/TokenContextController/TokenContextController'
import { ClientContextController } from './client/clientContextController/ClientContextController'
import { LoggerContextController } from './logger/LoggerContextController/LoggerContextController'
import { SessionContextController } from './session/SessionContextController/SessionContextController'

function App() {
  // const [count, setCount] = useState(0)

  // const myPromise = new Promise((resolve, reject) => {
  //   const cms = 'Hygraph'
  //   console.log('ok')
  //   if (cms === 'Hygraph') {
  //     resolve('success: the promise has successfully resolved!')
  //   } else {
  //     reject('Failure: The promise has failed!')
  //   }
  // })

  // console.log(myPromise)

  // myPromise
  //   .then(result => {
  //     console.log(result)
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   })

  // fetch('https://api-us-east-1.hygraph.com/v2/cl4ji8xe34tjp01yrexjifxnw/mastr', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     query: `
  //     query {
  //       cocktails {
  //         category
  //         info
  //         ingredients
  //         instructions
  //         name
  //       }
  //     }
  //   `
  //   })
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))

  return (
    <>
      {/* <UserLocationContextController>
          <CurrencyContextController>
            <LemonadeProvider>
              <ThemeContext> */}
      <SessionContextController>
        <LoggerContextController>
          <TokenContextController>
            <ClientContextController>
              <Layout>
                <AppRoutes />
              </Layout>
            </ClientContextController>
          </TokenContextController>
        </LoggerContextController>
      </SessionContextController>
      {/* </ThemeContext>
            </LemonadeProvider>
          </CurrencyContextController>
        </UserLocationContextController> */}
    </>
  )
}

export default App
