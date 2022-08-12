import type { AppProps } from 'next/app'

import MenuView from '../modules/menu/view'

import AuthProvider from '../common/providers/auth'
import GlobalStyle from '../styles/global'
import { wrapper } from "../store"

import { makeServer } from '../../mirage'
import { MenuProvider } from '../modules/menu/context'

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MenuProvider>
        <MenuView>
          <Component {...pageProps} />
          <GlobalStyle />
        </MenuView>
      </MenuProvider>
    </AuthProvider>
  )
}

export default wrapper.withRedux(MyApp)
