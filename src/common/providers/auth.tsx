import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter } from 'next/router'

import { selectAuthState } from "../../store/authSlice"

type IAuthProvider = {
  children: React.ReactNode
}

export default function AuthProvider({ children } : IAuthProvider) {
  const authState = useSelector(selectAuthState)
  const router = useRouter()
  const privateRoutes = [
    '/',
    '/history',
    '/preferences'
  ]

  useEffect(() => {
    const path = window.location.pathname
    const isPrivate = privateRoutes.indexOf(path) !== -1

    if (isPrivate) router.push('/auth')
  }, [authState])

  return (
    <>
      {children}
    </>
  )
}