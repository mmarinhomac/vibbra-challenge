import { useAuthContext } from '../context'

export default function AuthBusiness() {
  const context = useAuthContext()

  return {
    isSignInFormMode: context.signInFormMode
  }  
}