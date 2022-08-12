import { useState, useEffect } from 'react'

// import { getBudgetRequest } from '../../../services/budget'

export default function BudgetBusiness() {
  const [initialRender, setInitialRender] = useState<boolean>(true)

  const handleInitialData = async () => {
    // const data = await getBudgetRequest()
    // console.log('#data', data)
  }
  
  useEffect(() => setInitialRender(false), [])

  useEffect(() => {
    if (initialRender) {
      handleInitialData()
    }
  }, [initialRender])

  return {
  }
}