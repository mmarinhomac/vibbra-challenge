import { useAuthContext } from '../context'

export default function AuthCore() {
  const context = useAuthContext()

  return {
    isSignInFormMode: context.signInFormMode,
  }
}
