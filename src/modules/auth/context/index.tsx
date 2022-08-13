import { createContext, useContext, useState } from 'react'

type ISignInFormData = {
  email: string | ''
  password: string | ''
}

type ISignUpFormData = {
  email: string | ''
  name: string | ''
  companyRegister: string | ''
  companyName: string | ''
  phone: string | ''
  password: string | ''
}

interface IAuthContext {
  signInFormMode: boolean
  setSignInFormMode: React.Dispatch<React.SetStateAction<boolean>>
  signInFormData: ISignInFormData
  setSignInFormData: React.Dispatch<React.SetStateAction<ISignInFormData>>
  signUpFormData: ISignUpFormData
  setSignUpFormData: React.Dispatch<React.SetStateAction<ISignUpFormData>>
}

interface IAuthProvider {
  children: React.ReactElement
}

const initialState : IAuthContext = {
  signInFormMode: true,
  setSignInFormMode: () => {},
  signInFormData: {
    email: '',
    password: ''
  },
  setSignInFormData: () => {},
  signUpFormData: {
    email: '',
    name: '',
    companyRegister: '',
    companyName: '',
    phone: '',
    password: '',
  },
  setSignUpFormData: () => {}
}

const AuthContext = createContext<IAuthContext>(initialState)

export const AuthProvider = ({ children } : IAuthProvider) => {
  // Global Auth
  const [signInFormMode, setSignInFormMode] = useState(initialState.signInFormMode)

  // SignIn
  const [signInFormData, setSignInFormData] = useState(initialState.signInFormData)

  // SignUp
  const [signUpFormData, setSignUpFormData] = useState(initialState.signUpFormData)
  
  return (
    <AuthContext.Provider 
      value={{
        signInFormMode, setSignInFormMode,
        signInFormData, setSignInFormData,
        signUpFormData, setSignUpFormData,
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