import api from './index'

export const createUserRequest = ({ body }: { body: any }) =>
  new Promise((resolve, reject) => {
    api
      .post('/user', body)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err))
  })
