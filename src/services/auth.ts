import api from './index'

export const postAuthRequest = ({
  body
} : {
  body: any
}) => new Promise((resolve, reject) => {
  api.post('/auth', body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})
