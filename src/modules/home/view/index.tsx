import { withAuth } from '../../../common/hooks/withAuth'

import BudgetBusiness from '../business/budget'

function HomeView() {
  BudgetBusiness()

  return (
    <h1>Home</h1>
  )
}

export default withAuth(HomeView)
