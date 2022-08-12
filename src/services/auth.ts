import api from './index'

interface ICreateAuthRequest {
  email: string
  name: string
  cnpj: string
  companyName: string
  phone: string
  id: string
  token: string
}

export const createAuthRequest = ({
  body
} : {
  body: any
}) => new Promise<ICreateAuthRequest>((resolve, reject) => {
  api.post('/auth', body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err))
})
