import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from 'next/router'

import { selectAuthState, signInAction } from "../../store/authSlice"

interface IAuthProvider {
  children: React.ReactNode
}

export default function AuthProvider({ children } : IAuthProvider) {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const privateRoutes = [
      '/',
      '/history',
      '/preferences',
    ]
    const authRoutes = [
      '/auth',
    ]

    const path = window.location.pathname
    const isPrivate = privateRoutes.indexOf(path) !== -1
    const isAuth = authRoutes.indexOf(path) !== -1
    const token = localStorage.getItem('token')
    
    // Logged - Update Store
    if (
      !authState && token
    ) dispatch(signInAction(true))

    // Not Authorized
    if (
      isPrivate && !authState && !token
    ) router.push('/auth')

    // Already logged
    if (
      isAuth && authState
    ) router.push('/')
  }, [authState, dispatch, router])

  return (
    <>
      {children}
    </>
  )
}