import api from './index'

export const getBudgetRequest = () =>
  new Promise((resolve, reject) => {
    api
      .get('/budget')
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err))
  })

export const updateBudgetRequest = ({ id, body }: { id: any; body: any }) =>
  new Promise((resolve, reject) => {
    api
      .put(`/budget/${id}`, body)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err))
  })
