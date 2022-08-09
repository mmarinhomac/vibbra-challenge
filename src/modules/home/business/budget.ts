import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { selectAuthState, signInAction } from "../../../store/authSlice";

import { getBudgetRequest } from '../../../services/budget'

interface IBudgetBusiness {
  isProduction: boolean
}

export default function BudgetBusiness({ isProduction } : IBudgetBusiness) {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const [initialRender, setInitialRender] = useState<boolean>(true)

  const handleInitialData = async () => {
    // test redux store
    dispatch(signInAction(true))

    const data = await getBudgetRequest({ isProduction })
    console.log('#data', data)
  }
  
  useEffect(() => setInitialRender(false))

  useEffect(() => {
    if (initialRender) {
      handleInitialData()
      // fetch('http://localhost:3000/api/budget')
      //   .then(data => data.json())
      //   .then(data => console.log(data))
      // fetch('http://localhost:3000/api/preferences')
      //   .then(data => data.json())
      //   .then(data => console.log(data))
      // fetch('http://localhost:3000/api/companies')
      //   .then(data => data.json())
      //   .then(data => console.log(data))
      // fetch('http://localhost:3000/api/categories')
      //   .then(data => data.json())
      //   .then(data => console.log(data))
      // fetch('http://localhost:3000/api/expenses')
      //   .then(data => data.json())
      //   .then(data => console.log(data))
      // fetch('http://localhost:3000/api/invoices')
      //   .then(data => data.json())
      //   .then(data => console.log(data))
    }
  }, [initialRender])

  return {
    authState
  }
}