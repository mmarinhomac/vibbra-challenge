import { useEffect, useState } from "react"

import { usePreferencesContext } from "../context"

import { getBudgetRequest } from "../../../services/budget"

export default function BudgetBusiness() {
  const context = usePreferencesContext()

  const [initialRender, setInitialRender] = useState(true)

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getBudgetRequest()
        .then((data: any) => {
          console.log(data)
        })
    }
  }, [initialRender, context])
  
  useEffect(() => setInitialRender(false), [])

  return {
  }
}