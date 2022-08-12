import { createContext, useContext, useState } from 'react'

interface IHistoryContext {}

interface IHistoryProvider {
  children: React.ReactElement;
}

const initialState = {}

const HistoryContext = createContext<IHistoryContext>(initialState)

export const HistoryProvider = ({ children } : IHistoryProvider) => {  
  return (
    <HistoryContext.Provider 
      value={{}}
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