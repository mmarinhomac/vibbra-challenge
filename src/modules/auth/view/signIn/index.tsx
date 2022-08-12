import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'

import SignInBusiness from '../../business/signIn'

import Input from '../../../../common/components/Input'
import Checkbox from '../../../../common/components/Checkbox'

import {
  Container,
  Form,
  HStack,
  BtnSocialLogin,
  BtnText,
  BtnSubmit,
  BtnSignUp,
} from './styles'

export default function SignInView() {
  const {
    changeFormMode,
    onUpdateForm,
    onSubmit
  } = SignInBusiness()

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Bem-vindo de volta!</h1>
        <span>Por favor entre com sua conta.</span>

        <BtnSocialLogin>
          <FcGoogle />
          <span>Entrar com o Google</span>
        </BtnSocialLogin>

        <BtnSocialLogin iconColor="#4267B2">
          <FaFacebook />
          <span>Entrar com o Facebook</span>
        </BtnSocialLogin>

        <HStack>
          <div></div>
          <span>OU</span>
          <div></div>
        </HStack>

        <Input id='email' type='text' placeholder='Email' onChange={onUpdateForm}/>
        <Input id='password' type='password' placeholder='Senha' onChange={onUpdateForm}/>

        <HStack>
          <Checkbox id='keepConnected' label='Mantenha-me conectado' onChange={onUpdateForm} />
          <BtnText>Esqueci minha senha</BtnText>
        </HStack>

        <BtnSubmit type='submit'>Entrar</BtnSubmit>

        <BtnSignUp onClick={changeFormMode}>
          Não possuí uma conta? <strong>Cadastre-se</strong>
        </BtnSignUp>
      </Form>
    </Container>
  )
}