import type { AppProps } from 'next/app'

import { wrapper } from "../store"
import { makeServer } from '../../mirage'

import GlobalStyle from '../styles/global';

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default wrapper.withRedux(MyApp)
