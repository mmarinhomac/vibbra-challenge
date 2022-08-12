import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from 'next/router'

import { useMenuContext } from '../context'

import { selectAuthState, setLogged } from '../../../store/authSlice'

export default function MenuBusiness() {
  const authState = useSelector(selectAuthState)
  const context = useMenuContext()
  const dispatch = useDispatch()
  const router = useRouter()

  const [initialRender, setInitialRender] = useState<boolean>(true)

  const onMenuChoice = ({ number } : { number: number }) => {
    context.setMenuSelection(number)
    if (number === 0) router.push('/')
    if (number === 1) router.push('/preferences')
    if (number === 2) router.push('/history')
  }

  const onLogout = () => {
    localStorage.removeItem('token')
    dispatch(setLogged(false))
    router.push('/auth')
  }
  
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
    menuSelection: context.menuSelection,
    onLogout,
    onMenuChoice,
  }
}