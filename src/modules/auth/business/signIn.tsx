import { useAuthContext } from '../context'

import { postAuthRequest } from '../../../services/auth'

export default function SignInBusiness() {
  const context = useAuthContext()

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

    if (!validated) return console.log(errors)

    // send request
    console.log(context.signInFormData)
    const data = await postAuthRequest({ body: context.signInFormData })
    console.log(data)
  }

  return {
    changeFormMode,
    onUpdateForm,
    onSubmit
  }
}