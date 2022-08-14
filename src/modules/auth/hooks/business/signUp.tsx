import { useAuthContext } from '../../context'

import { createUserRequest } from '../../../../services/user'

const signUpErrorsTypes = {
  COD999: 'COD999 - Contate Administrador do Sistema',
}

export default function SignUpBusiness() {
  const context = useAuthContext()

  const changeFormMode = () => context.setSignInFormMode(true)

  const onUpdateForm = ({
    id,
    value,
  }: {
    id: string
    value: string | boolean
  }) =>
    context.setSignUpFormData((oldState: any) => ({
      ...oldState,
      [id]: value,
    }))

  const validatedFormData = () => {
    let validated = true
    const errors = []

    if (
      context?.signUpFormData?.email &&
      context.signUpFormData.email.length === 0 &&
      context?.signUpFormData?.name &&
      context.signUpFormData.name.length === 0 &&
      context?.signUpFormData?.companyRegister &&
      context.signUpFormData.companyRegister.length === 0 &&
      context?.signUpFormData?.companyName &&
      context.signUpFormData.companyName.length === 0 &&
      context?.signUpFormData?.phone &&
      context.signUpFormData.phone.length === 0 &&
      context?.signUpFormData?.password &&
      context.signUpFormData.password.length === 0
    ) {
      validated = false
      errors.push('Confira seus dados')
    }

    return { validated, errors }
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()
    const { validated, errors } = validatedFormData()

    // @refactor - add Toast Message
    if (!validated) return console.log(errors)

    try {
      const data = await createUserRequest({ body: context.signUpFormData })
      // @refactor - add Toast Message
      console.log(data)
      changeFormMode()
    } catch (error: any) {
      // @refactor - add Toast Message
      const errors = error?.response?.data?.errors
      const message = Array.isArray(errors)
        ? errors[0]
        : signUpErrorsTypes['COD999']
      console.log(message)
    }
  }

  return {
    changeFormMode,
    onUpdateForm,
    onSubmit,
  }
}
