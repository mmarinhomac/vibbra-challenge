import { createContext, useContext, useState } from 'react'

type IInvoice = {
  id: string
  companieId: number
  value: number
  invoiceNumber: number
  description: string
  createdAt: string
  payDay: string
}

type IExpense = {
  id: string
  categorieId: number
  categorieName: string
  companieId: number
  value: number
  name: string
  createdAt: string
  dateRefCompetency: string
}

interface IHistoryContext {
  tabSelected: number
  setTabSelected: React.Dispatch<React.SetStateAction<number>>
  invoiceList: IInvoice[] | null
  setInvoiceList: React.Dispatch<React.SetStateAction<IInvoice[] | null>>
  expenseList: IExpense[] | null
  setExpenseList: React.Dispatch<React.SetStateAction<IExpense[] | null>>
}

interface IHistoryProvider {
  children: React.ReactElement
}

const initialState: IHistoryContext = {
  tabSelected: 0,
  setTabSelected: () => {},
  invoiceList: null,
  setInvoiceList: () => {},
  expenseList: null,
  setExpenseList: () => {},
}

const HistoryContext = createContext<IHistoryContext>(initialState)

export const HistoryProvider = ({ children }: IHistoryProvider) => {
  // Switches
  const [tabSelected, setTabSelected] = useState(initialState.tabSelected)

  // Data
  const [invoiceList, setInvoiceList] = useState(initialState.invoiceList)
  const [expenseList, setExpenseList] = useState(initialState.expenseList)

  return (
    <HistoryContext.Provider
      value={{
        tabSelected,
        setTabSelected,
        invoiceList,
        setInvoiceList,
        expenseList,
        setExpenseList,
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}

export const useHistoryContext = () => {
  const context = useContext(HistoryContext)

  if (!context) {
    throw new Error('useHistoryContext must be used within an HistoryProvider')
  }

  return context
}
