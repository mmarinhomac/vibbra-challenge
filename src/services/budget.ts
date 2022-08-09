import axios from 'axios'

const baseURLDev = 'http://localhost:3000/api'
const baseURLProd = 'https://vibbra-challenge.vercel.app/api'

export const getBudgetRequest = ({
  isProduction
} : {
  isProduction: boolean
}) => new Promise((resolve, reject) => {
  axios.get(!isProduction ? 
    `${baseURLDev}/budget` :
    `${baseURLProd}/budget`)
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
})
