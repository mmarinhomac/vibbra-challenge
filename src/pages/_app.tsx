import type { AppProps } from 'next/app'

import { wrapper } from '../store'

import GlobalStyle from '../styles/global'

import Menu from '../modules/menu/view'
import Modal from '../common/components/Modal'

import { makeServer } from '../../mirage'

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <GlobalStyle />
      <Component {...pageProps} />
      <Modal />
    </>
  )
}

export default wrapper.withRedux(MyApp)
