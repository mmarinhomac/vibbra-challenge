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
  filterYear: string | null
  setFilterYear: React.Dispatch<React.SetStateAction<string | null>>
  billingAvailable: IBillingAvailable[] | null
  setBillingAvailable: React.Dispatch<
    React.SetStateAction<IBillingAvailable[] | null>
  >
  monthlyInvoices: IMonthlyInvoices | null
  setMonthlyInvoices: React.Dispatch<
    React.SetStateAction<IMonthlyInvoices | null>
  >
  monthlyExpenses: IMonthlyExpenses | null
  setMonthlyExpenses: React.Dispatch<
    React.SetStateAction<IMonthlyExpenses | null>
  >
  expensesByCategories: IExpensesByCategories | null
  setExpensesByCategories: React.Dispatch<
    React.SetStateAction<IExpensesByCategories | null>
  >
}

interface IHomeProvider {
  children: React.ReactElement
}

const initialState: IHomeContext = {
  filterYear: null,
  setFilterYear: () => {},
  billingAvailable: null,
  setBillingAvailable: () => {},
  monthlyInvoices: null,
  setMonthlyInvoices: () => {},
  monthlyExpenses: null,
  setMonthlyExpenses: () => {},
  expensesByCategories: null,
  setExpensesByCategories: () => {},
}

const HomeContext = createContext<IHomeContext>(initialState)

export const HomeProvider = ({ children }: IHomeProvider) => {
  // Dashboard
  const [filterYear, setFilterYear] = useState(initialState.filterYear)
  const [billingAvailable, setBillingAvailable] = useState(
    initialState.billingAvailable
  )
  const [monthlyInvoices, setMonthlyInvoices] = useState(
    initialState.monthlyInvoices
  )
  const [monthlyExpenses, setMonthlyExpenses] = useState(
    initialState.monthlyExpenses
  )
  const [expensesByCategories, setExpensesByCategories] = useState(
    initialState.expensesByCategories
  )

  return (
    <HomeContext.Provider
      value={{
        filterYear,
        setFilterYear,
        billingAvailable,
        setBillingAvailable,
        monthlyInvoices,
        setMonthlyInvoices,
        monthlyExpenses,
        setMonthlyExpenses,
        expensesByCategories,
        setExpensesByCategories,
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
