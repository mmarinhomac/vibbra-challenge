import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'

import SignUpBusiness from '../../business/signUp'

import Input from '../../../../common/components/Input'

import {
  Container,
  Form,
  HStack,
  BtnSocialLogin,
  BtnSubmit,
  BtnSignUp,
} from './styles'

export default function SignUpView() {
  const {
    changeFormMode,
    onUpdateForm,
    onSubmit
  } = SignUpBusiness()

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Bem-vindo!</h1>
        <span>Crie sua conta.</span>

        <BtnSocialLogin>
          <FcGoogle />
          <span>Cadastrar-se com o Google</span>
        </BtnSocialLogin>

        <BtnSocialLogin iconColor="#4267B2">
          <FaFacebook />
          <span>Cadastrar-se com o Facebook</span>
        </BtnSocialLogin>

        <HStack>
          <div></div>
          <span>OU</span>
          <div></div>
        </HStack>

        <Input id='email' type='text' placeholder='Email' onChange={onUpdateForm}/>
        <Input id='name' type='text' placeholder='Nome' onChange={onUpdateForm}/>
        <Input id='companyRegister' type='text' placeholder='CNPJ' onChange={onUpdateForm}/>
        <Input id='companyName' type='text' placeholder='Nome da Empresa' onChange={onUpdateForm}/>
        <Input id='phone' type='text' placeholder='Telefone' onChange={onUpdateForm}/>
        <Input id='password' type='password' placeholder='Senha' onChange={onUpdateForm}/>

        <BtnSubmit type='submit'>Cadastrar-se</BtnSubmit>

        <BtnSignUp onClick={changeFormMode}>
          Já possuí uma conta? <strong>Entre aqui</strong>
        </BtnSignUp>
      </Form>
    </Container>
  )
}