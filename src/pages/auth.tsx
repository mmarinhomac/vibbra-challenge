import Head from 'next/head'

import { AuthProvider } from '../modules/auth/context'

import AuthView from '../modules/auth/view'

const Auth = () => {
  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>

      <AuthProvider>
        <AuthView />
      </AuthProvider>
    </>
  )
}

export default Auth
