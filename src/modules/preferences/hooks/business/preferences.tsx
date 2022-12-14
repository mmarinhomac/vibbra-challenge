import { useEffect, useState } from 'react'

import { usePreferencesContext } from '../../context'

import { getPreferencesRequest } from '../../../../services/preference'

export default function PreferencesBusiness() {
  const context = usePreferencesContext()

  const [initialRender, setInitialRender] = useState(true)

  const onChangePreferences = (option: string) => {
    console.log('onChangePreferences', option)
  }

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getPreferencesRequest().then((data: any) => {
        context.setNotifications(data.notification)
      })
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    emailActived: () => {
      if (context.notifications) {
        return context.notifications.indexOf('email') !== -1
      }

      return false
    },
    smsActived: () => {
      if (context.notifications) {
        return context.notifications.indexOf('sms') !== -1
      }

      return false
    },
    onChangePreferences,
  }
}
