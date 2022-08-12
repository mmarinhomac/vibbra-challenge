import type { AppProps } from 'next/app'

import AuthProvider from '../common/providers/auth'

import { wrapper } from "../store"
import { makeServer } from '../../mirage'

import GlobalStyle from '../styles/global'

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AuthProvider>
  )
}

export default wrapper.withRedux(MyApp)
