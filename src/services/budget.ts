import api from './index'

export const getBudgetRequest = () => new Promise((resolve, reject) => {
  api.get('/budget')
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})
