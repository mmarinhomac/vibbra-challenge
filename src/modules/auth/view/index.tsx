import dynamic from 'next/dynamic'

import AuthCore from '../core'

import SignIn from './signIn'
const SignUp = dynamic(() => import('./signUp'))

export default function AuthView() {
  const { isSignInFormMode } = AuthCore()

  return isSignInFormMode ? <SignIn /> : <SignUp />
}
