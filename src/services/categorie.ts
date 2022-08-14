import api from './index'

export const getCategoriesRequest = () =>
  new Promise((resolve, reject) => {
    api
      .get('/categories')
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err))
  })

export const createCategorieRequest = ({ body }: { body: any }) =>
  new Promise((resolve, reject) => {
    api
      .post('/categories', body)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err))
  })

export const updateCategorieRequest = ({ id, body }: { id: any; body: any }) =>
  new Promise((resolve, reject) => {
    api
      .put(`/categories/${id}`, body)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err))
  })
