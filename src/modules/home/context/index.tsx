import { createContext, useContext, useState } from 'react'

interface IBillingAvailable {
  name: string
  data: number[]
}

interface IMonthlyInvoices {
  months: string[]
  data: number[]
}

interface IMonthlyExpenses {
  months: string[]
  data: number[]
}

interface IExpensesByCategories {
  categories: string[]
  data: number[]
}

interface IHomeContext {
  filterYear: string
  setFilterYear: React.Dispatch<React.SetStateAction<string>>
  billingAvailable: IBillingAvailable[]
  setBillingAvailable: React.Dispatch<React.SetStateAction<IBillingAvailable[]>>
  monthlyInvoices: IMonthlyInvoices
  setMonthlyInvoices: React.Dispatch<React.SetStateAction<IMonthlyInvoices>>
  monthlyExpenses: IMonthlyExpenses
  setMonthlyExpenses: React.Dispatch<React.SetStateAction<IMonthlyExpenses>>
  expensesByCategories: IExpensesByCategories
  setExpensesByCategories: React.Dispatch<React.SetStateAction<IExpensesByCategories>>
}

interface IHomeProvider {
  children: React.ReactElement
}

const initialState = {
  filterYear: '',
  setFilterYear: () => {},
  billingAvailable: [{
    name: 'string',
    data: [0]
  }],
  setBillingAvailable: () => {},
  monthlyInvoices: {
    months: [''],
    data: [0]
  },
  setMonthlyInvoices: () => {},
  monthlyExpenses: {
    months: [''],
    data: [0]
  },
  setMonthlyExpenses: () => {},
  expensesByCategories: {
    categories: [''],
    data: [0]
  },
  setExpensesByCategories: () => {},
}

const HomeContext = createContext<IHomeContext>(initialState)

export const HomeProvider = ({ children } : IHomeProvider) => {
  const [filterYear, setFilterYear] = useState(initialState.filterYear)
  const [billingAvailable, setBillingAvailable] = useState(initialState.billingAvailable)
  const [monthlyInvoices, setMonthlyInvoices] = useState(initialState.monthlyInvoices)
  const [monthlyExpenses, setMonthlyExpenses] = useState(initialState.monthlyExpenses)
  const [expensesByCategories, setExpensesByCategories] = useState(initialState.expensesByCategories)

  return (
    <HomeContext.Provider 
      value={{
        filterYear, setFilterYear,
        billingAvailable, setBillingAvailable,
        monthlyInvoices, setMonthlyInvoices,
        monthlyExpenses, setMonthlyExpenses,
        expensesByCategories, setExpensesByCategories,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => {
  const context = useContext(HomeContext)

  if (!context) {
    throw new Error('useHomeContext must be used within an HomeProvider')
  }

  return context
}