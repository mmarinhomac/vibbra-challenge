import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import { useMenuContext } from '../context'

import { selectAuthState } from '../../../store/authSlice'

export default function MenuBusiness() {
  const authState = useSelector(selectAuthState)
  const context = useMenuContext()

  const [initialRender, setInitialRender] = useState<boolean>(true)
  
  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      const userName = localStorage.getItem('userName')
      context.setHelloTitle(`Hello ${userName}`)
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    authState,
    helloTitle: context.helloTitle,
  }
}