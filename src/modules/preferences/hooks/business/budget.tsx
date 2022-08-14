import { useEffect, useState } from 'react'

import { usePreferencesContext } from '../../context'

import { getBudgetRequest } from '../../../../services/budget'

export default function BudgetBusiness() {
  const context = usePreferencesContext()

  const [initialRender, setInitialRender] = useState(true)

  const onSaveMaximumBillingLimit = () => {
    console.log('onSaveMaximumBillingLimit')
  }

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getBudgetRequest().then((data: any) => {
        context.setMaximumBillingLimit(data.maximumBillingLimit)
      })
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    maximumBillingLimit: context.maximumBillingLimit
      ? String(context.maximumBillingLimit)
      : null,
    onSaveMaximumBillingLimit,
  }
}
