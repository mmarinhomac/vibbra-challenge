import { useAuthContext } from '../context'

export default function SignUpBusiness() {
  const context = useAuthContext()

  const changeFormMode = () => context.setSignInFormMode(true)

  const onUpdateForm = ({ 
    id, 
    value
  } : { 
    id: string, 
    value: any
  }) => context.setSignUpFormData(oldState => ({
    ...oldState,
    [id]: value
  }))

  const validatedFormData = () => {
    let validated = true
    const errors = []

    if (
      context.signUpFormData.email.length === 0 &&
      context.signUpFormData.name.length === 0 &&
      context.signUpFormData.cnpj.length === 0 &&
      context.signUpFormData.companyName.length === 0 &&
      context.signUpFormData.phone.length === 0 &&
      context.signUpFormData.password.length === 0
    ) {
      validated = false
      errors.push('Confira seus dados')
    }

    return { validated, errors }
  }

  const onSubmit = (event : any) => {
    event.preventDefault()
    const { validated, errors } = validatedFormData()

    if (!validated) return console.log(errors)

    // send request
    console.log(context.signUpFormData)
  }

  return {
    changeFormMode,
    onUpdateForm,
    onSubmit
  }
}