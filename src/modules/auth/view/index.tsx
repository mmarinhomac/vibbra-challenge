import dynamic from 'next/dynamic'

import AuthBusiness from '../business'

import SignIn from './signIn'
const SignUp = dynamic(() => import('./signUp'))

export default function AuthView() {
  const {
    isSignInFormMode
  } = AuthBusiness()

  return isSignInFormMode ? <SignIn /> : <SignUp />
}