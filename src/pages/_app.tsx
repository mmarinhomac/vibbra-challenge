import type { AppProps } from 'next/app'

import { makeServer } from '../../mirage'

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
