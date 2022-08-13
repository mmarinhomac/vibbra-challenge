import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppProps } from "next/app"
import Router from 'next/router'

import { getStorageToken } from '../utils/auth'

import { selectAuthState, setLogged } from "../../store/authSlice"

export function withAuth(WrapperComponent : React.FunctionComponent<AppProps>) {
  const PrivateRouter = (props : AppProps) => {
    const authState = useSelector(selectAuthState)
    const dispatch = useDispatch()

    const [accepted, setAccepted] = useState(false)
    
    useEffect(() => {
      const token = getStorageToken()

      // Logged
      if (authState) {
        setAccepted(true)
      } // Update Store
      else if (token) {
        dispatch(setLogged(true))
        setAccepted(true)
      } // Not Authorized
      else {
        Router.push('/auth')
      }
    }, [authState])

    if (accepted) {
      return <WrapperComponent {...props} />
    } else {
      return <></>
    }
  }

  return PrivateRouter
}
