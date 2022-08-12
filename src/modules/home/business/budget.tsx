import { useState, useEffect } from 'react'

// import { getBudgetRequest } from '../../../services/budget'

export default function BudgetBusiness() {
  const [initialRender, setInitialRender] = useState<boolean>(true)

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      console.log('initial data')
    }
  }, [initialRender])

  useEffect(() => setInitialRender(false), [])

  return {
  }
}