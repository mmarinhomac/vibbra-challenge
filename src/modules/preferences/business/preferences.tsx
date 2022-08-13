import { useEffect, useState } from "react"

import { usePreferencesContext } from "../context"

import { getPreferencesRequest } from "../../../services/preference"

export default function PreferencesBusiness() {
  const context = usePreferencesContext()

  const [initialRender, setInitialRender] = useState(true)

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getPreferencesRequest()
        .then((data: any) => {
          console.log(data)
        })
    }
  }, [initialRender, context])
  
  useEffect(() => setInitialRender(false), [])

  return {
  }
}