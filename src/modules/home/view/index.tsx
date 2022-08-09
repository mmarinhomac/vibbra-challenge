import BudgetBusiness from '../business/budget'

export default function HomeView({ isProduction } : { isProduction: boolean }) {
  const {
    authState
  } = BudgetBusiness({ isProduction })

  return (
    <h1>Home {authState ? 'Logged' : 'Is Not Logged'}</h1>
  )
}