import BudgetBusiness from '../business/budget'

export default function HomeView() {
  const {
    authState
  } = BudgetBusiness()

  return (
    <h1>Home {authState ? 'Logged' : 'Is Not Logged'}</h1>
  )
}