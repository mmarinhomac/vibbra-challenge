import api from './index'

export const getCompaniesRequest = () => new Promise((resolve, reject) => {
  api.get('/companies')
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})

export const createCompanieRequest = ({
  body
} : {
  body: any
}) => new Promise((resolve, reject) => {
  api.post('/companies', body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})

export const updateCompanieRequest = ({
  id,
  body
} : {
  id: any,
  body: any
}) => new Promise((resolve, reject) => {
  api.put(`/companies/${id}`, body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})
