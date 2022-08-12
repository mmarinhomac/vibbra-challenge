import { useState, useEffect } from 'react'

import { useHomeContext } from '../context'

// import { getBudgetRequest } from '../../../services/budget'

export default function ExpenseBusiness() {
  const context = useHomeContext()

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