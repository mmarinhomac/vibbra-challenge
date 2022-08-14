import { createContext, useContext, useState } from 'react'

type IInvoice = {
  id: string,
  companieId: number,
  value: number,
  invoiceNumber: number,
  description: string,
  createdAt: string,
  payDay: string,
}

type IExpense = {
  id: string,
  categorieId: number,
  categorieName: string,
  companieId: number,
  value: number,
  name: string,
  createdAt: string,
  dateRefCompetency: string,
}

interface IHistoryContext {
  tabSelected: number
  setTabSelected: React.Dispatch<React.SetStateAction<number>>
  invoiceList: IInvoice[]
  setInvoiceList: React.Dispatch<React.SetStateAction<IInvoice[]>>
  expenseList: IExpense[]
  setExpenseList: React.Dispatch<React.SetStateAction<IExpense[]>>
}

interface IHistoryProvider {
  children: React.ReactElement
}

const initialState : IHistoryContext = {
  tabSelected: 0,
  setTabSelected: () => {},
  invoiceList: [{
    id: '',
    companieId: 0,
    value: 0,
    invoiceNumber: 0,
    description: '',
    createdAt: '',
    payDay: '',
  }],
  setInvoiceList: () => {},
  expenseList: [{
    id: '',
    categorieId: 0,
    categorieName: '',
    companieId: 0,
    value: 0,
    name: '',
    createdAt: '',
    dateRefCompetency: '',
  }],
  setExpenseList: () => {},
}

const HistoryContext = createContext<IHistoryContext>(initialState)

export const HistoryProvider = ({ children } : IHistoryProvider) => {
  // Switches
  const [tabSelected, setTabSelected] = useState(initialState.tabSelected)

  // Data
  const [invoiceList, setInvoiceList] = useState(initialState.invoiceList)
  const [expenseList, setExpenseList] = useState(initialState.expenseList)

  return (
    <HistoryContext.Provider 
      value={{
        tabSelected, setTabSelected,
        invoiceList, setInvoiceList,
        expenseList, setExpenseList,
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