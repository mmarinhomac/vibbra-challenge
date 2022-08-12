
import { useDispatch } from "react-redux"

import { useAuthContext } from '../context'

import { signInAction } from "../../../store/authSlice"

import { createAuthRequest } from '../../../services/auth'

export default function SignInBusiness() {
  const context = useAuthContext()
  const dispatch = useDispatch()

  const changeFormMode = () => context.setSignInFormMode(false)

  const onUpdateForm = ({ 
    id, 
    value
  } : { 
    id: string, 
    value: any
  }) => context.setSignInFormData(oldState => ({
    ...oldState,
    [id]: value
  }))

  const validatedFormData = () => {
    let validated = true
    const errors = []

    if (
      context.signInFormData.email.length === 0 &&
      context.signInFormData.password.length === 0
    ) {
      validated = false
      errors.push('Confira seus dados')
    }

    return { validated, errors }
  }

  const onSubmit = async (event : any) => {
    event.preventDefault()
    const { validated, errors } = validatedFormData()

    // @refactor - add Toast Message
    if (!validated) return console.log(errors)

    try {
      const {
        token,
        id,
        name
      } = await createAuthRequest({ body: context.signInFormData })

      localStorage.setItem('token', token)
      localStorage.setItem('userId', id)
      localStorage.setItem('userName', name)
      
      dispatch(signInAction(true))
    } catch (error) {
      // @refactor - add Toast Message
      console.log(error)
    }
  }

  return {
    changeFormMode,
    onUpdateForm,
    onSubmit
  }
}