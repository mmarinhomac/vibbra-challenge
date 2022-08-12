import { useState, useEffect } from 'react'

import { useHomeContext } from '../context'

// import { getBudgetRequest } from '../../../services/budget'

export default function ExpenseBusiness() {
  const context = useHomeContext()

  const [initialRender, setInitialRender] = useState<boolean>(true)

  const handleInitialData = () => {
    
  }

  useEffect(() => setInitialRender(false), [])

  useEffect(() => {
    if (initialRender) {
      handleInitialData()
    }
  }, [initialRender, handleInitialData])

  return {
  }
}