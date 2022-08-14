import { createContext, useContext, useState } from 'react'

type ISignInFormData = {
  email: string | null
  password: string | null
}

type ISignUpFormData = {
  email: string | null
  name: string | null
  companyRegister: string | null
  companyName: string | null
  phone: string | null
  password: string | null
}

interface IAuthContext {
  signInFormMode: boolean | null
  setSignInFormMode: React.Dispatch<React.SetStateAction<boolean | null>>
  signInFormData: ISignInFormData | null
  setSignInFormData: React.Dispatch<
    React.SetStateAction<ISignInFormData | null>
  >
  signUpFormData: ISignUpFormData | null
  setSignUpFormData: React.Dispatch<
    React.SetStateAction<ISignUpFormData | null>
  >
}

interface IAuthProvider {
  children: React.ReactElement
}

const initialState: IAuthContext = {
  signInFormMode: true,
  setSignInFormMode: () => {},
  signInFormData: null,
  setSignInFormData: () => {},
  signUpFormData: null,
  setSignUpFormData: () => {},
}

const AuthContext = createContext<IAuthContext>(initialState)

export const AuthProvider = ({ children }: IAuthProvider) => {
  // Global Auth
  const [signInFormMode, setSignInFormMode] = useState(
    initialState.signInFormMode
  )

  // SignIn
  const [signInFormData, setSignInFormData] = useState(
    initialState.signInFormData
  )

  // SignUp
  const [signUpFormData, setSignUpFormData] = useState(
    initialState.signUpFormData
  )

  return (
    <AuthContext.Provider
      value={{
        signInFormMode,
        setSignInFormMode,
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
