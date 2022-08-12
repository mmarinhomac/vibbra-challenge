import api from './index'

export const getExpensesRequest = () => new Promise((resolve, reject) => {
  api.get('/expenses')
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err))
})

export const createExpenseRequest = ({
  body
} : {
  body: any
}) => new Promise((resolve, reject) => {
  api.post('/expenses', body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err))
})

export const updateExpenseRequest = ({
  id,
  body
} : {
  id: any,
  body: any
}) => new Promise((resolve, reject) => {
  api.put(`/expenses/${id}`, body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err))
})

export const deleteExpenseRequest = ({
  id,
} : {
  id: any,
}) => new Promise((resolve, reject) => {
  api.delete(`/expenses/${id}`)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err))
})
