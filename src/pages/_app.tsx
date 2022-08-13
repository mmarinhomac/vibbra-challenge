import type { AppProps } from 'next/app'

import { wrapper } from "../store"

import GlobalStyle from '../styles/global'

import MenuLayout from '../modules/menu/view/menuLayout'
import Modal from '../common/components/Modal'

import { makeServer } from '../../mirage'

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuLayout>
      <GlobalStyle />
      <Component {...pageProps} />
      <Modal />
    </MenuLayout>
  )
}

export default wrapper.withRedux(MyApp)
