import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { useMenuContext } from '../context'

import { selectAuthState, setLogged } from '../../../store/authSlice'
import { selectUserData } from '../../../store/userSlice'

export default function MenuCore() {
  const authState = useSelector(selectAuthState)
  const userData = useSelector(selectUserData)
  const context = useMenuContext()
  const dispatch = useDispatch()
  const router = useRouter()

  const [initialRender, setInitialRender] = useState(true)

  const onMenuChoice = ({ number }: { number: number }) => {
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
      const userName = userData.user.name || localStorage.getItem('userName')
      if (userName) {
        context.setHelloTitle(`Hello ${userName}`)
        setInitialRender(false)
      }
    }
  }, [initialRender, userData, context])

  // Handle direct access to route
  useEffect(() => {
    const path = window.location.pathname
    const paths = ['/', '/preferences', '/history']
    const isPresent = context.menuSelection === paths.indexOf(path)

    if (!isPresent) context.setMenuSelection(paths.indexOf(path))
  }, [context])

  return {
    authState,
    helloTitle: context.helloTitle,
    menuSelection: context.menuSelection,
    onLogout,
    onMenuChoice,
  }
}
