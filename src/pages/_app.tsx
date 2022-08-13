import type { AppProps } from 'next/app'

import MenuLayout from '../modules/menu/view/menuLayout'

import GlobalStyle from '../styles/global'
import { wrapper } from "../store"

import { makeServer } from '../../mirage'

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuLayout>
      <Component {...pageProps} />
      <GlobalStyle />
    </MenuLayout>
  )
}

export default wrapper.withRedux(MyApp)
