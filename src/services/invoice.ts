import api from './index'

export const getInvoicesRequest = () => new Promise((resolve, reject) => {
  api.get('/invoices')
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})

export const createInvoiceRequest = ({
  body
} : {
  body: any
}) => new Promise((resolve, reject) => {
  api.post('/invoices', body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})

export const updateInvoiceRequest = ({
  id,
  body
} : {
  id: any,
  body: any
}) => new Promise((resolve, reject) => {
  api.put(`/invoices/${id}`, body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})

export const deleteInvoiceRequest = ({
  id,
} : {
  id: any,
}) => new Promise((resolve, reject) => {
  api.delete(`/invoices/${id}`)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})
