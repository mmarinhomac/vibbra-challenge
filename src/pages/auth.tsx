import Head from 'next/head'

import AuthView from '../modules/auth/view'

const Auth = () => {
  return (
    <div>
      <Head>
        <title>Auth</title>
      </Head>

      <AuthView />
    </div>
  )
}

export default Auth
