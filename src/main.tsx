import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { CacheProvider } from '@emotion/react'
import { MantineProvider } from '@mantine/core'
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion'

// const myCache = createEmotionCache({ key: 'mantine' })

// const rootElement = document.getElementById('root')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineEmotionProvider>
    </MantineProvider>
  </React.StrictMode>
)
