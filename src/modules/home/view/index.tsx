import { useState, useEffect } from 'react'

import BudgetBusiness from '../business/budget'

export default function HomeView() {
  const [initialRender, setInitialRender] = useState<boolean>(true)

  BudgetBusiness({ initialRender })
  
  useEffect(() => setInitialRender(false))

  return (
    <h1>Home</h1>
  )
}