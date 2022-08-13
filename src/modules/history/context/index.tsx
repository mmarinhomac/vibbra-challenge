import { createContext, useContext, useState } from 'react'

interface IHistoryContext {
  tabSelected: number
  setTabSelected: React.Dispatch<React.SetStateAction<number>>
}

interface IHistoryProvider {
  children: React.ReactElement
}

const initialState : IHistoryContext = {
  tabSelected: 0,
  setTabSelected: () => {},
}

const HistoryContext = createContext<IHistoryContext>(initialState)

export const HistoryProvider = ({ children } : IHistoryProvider) => {
  // Switches
  const [tabSelected, setTabSelected] = useState(initialState.tabSelected)

  return (
    <HistoryContext.Provider 
      value={{
        tabSelected, setTabSelected
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