import api from './index'

export const getPreferencesRequest = () => new Promise((resolve, reject) => {
  api.get('/preferences')
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err))
})

export const updatePreferencesRequest = ({
  id,
  body
} : {
  id: any,
  body: any
}) => new Promise((resolve, reject) => {
  api.put(`/preferences/${id}`, body)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err))
})