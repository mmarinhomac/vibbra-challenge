import api from './index'

export const postUserRequest = ({
  body
} : {
  body: any
}) => new Promise((resolve, reject) => {
    api.post('/user', body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})
