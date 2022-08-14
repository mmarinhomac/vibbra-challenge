import { createContext, useContext, useState } from 'react'

interface ICompany {
  id: string
  companyRegister: string
  name: string
  socialReason: string
}

interface ICategory {
  id: string
  name: string
  description: string
  filed: boolean
}

interface IPreferencesContext {
  tabSelected: number
  setTabSelected: React.Dispatch<React.SetStateAction<number>>
  maximumBillingLimit: number | null
  setMaximumBillingLimit: React.Dispatch<React.SetStateAction<number | null>>
  notifications: string[] | null
  setNotifications: React.Dispatch<React.SetStateAction<string[] | null>>
  companyList: ICompany[] | null
  setCompanyList: React.Dispatch<React.SetStateAction<ICompany[] | null>>
  categoryList: ICategory[] | null
  setCategoryList: React.Dispatch<React.SetStateAction<ICategory[] | null>>
}

interface IPreferencesProvider {
  children: React.ReactElement
}

const initialState: IPreferencesContext = {
  tabSelected: 0,
  setTabSelected: () => {},
  maximumBillingLimit: null,
  setMaximumBillingLimit: () => {},
  notifications: null,
  setNotifications: () => {},
  companyList: null,
  setCompanyList: () => {},
  categoryList: null,
  setCategoryList: () => {},
}

const PreferencesContext = createContext<IPreferencesContext>(initialState)

export const PreferencesProvider = ({ children }: IPreferencesProvider) => {
  // Switches
  const [tabSelected, setTabSelected] = useState(initialState.tabSelected)

  // General
  const [maximumBillingLimit, setMaximumBillingLimit] = useState(
    initialState.maximumBillingLimit
  )
  const [notifications, setNotifications] = useState(initialState.notifications)

  // Records
  const [companyList, setCompanyList] = useState(initialState.companyList)
  const [categoryList, setCategoryList] = useState(initialState.categoryList)

  return (
    <PreferencesContext.Provider
      value={{
        tabSelected,
        setTabSelected,
        maximumBillingLimit,
        setMaximumBillingLimit,
        notifications,
        setNotifications,
        companyList,
        setCompanyList,
        categoryList,
        setCategoryList,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  )
}

export const usePreferencesContext = () => {
  const context = useContext(PreferencesContext)

  if (!context) {
    throw new Error(
      'usePreferencesContext must be used within an PreferencesProvider'
    )
  }

  return context
}
