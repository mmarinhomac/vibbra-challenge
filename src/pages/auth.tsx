import Head from 'next/head'

import { AuthProvider } from '../modules/auth/context'

import AuthView from '../modules/auth/view'

const Auth = () => {
  return (
    <div>
      <Head>
        <title>Auth</title>
      </Head>

      <AuthProvider>
        <AuthView />
      </AuthProvider>
    </div>
  )
}

export default Auth
