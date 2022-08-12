import { createContext, useContext, useState } from 'react'

interface IPreferencesContext {}

interface IPreferencesProvider {
  children: React.ReactElement;
}

const initialState = {}

const PreferencesContext = createContext<IPreferencesContext>(initialState)

export const PreferencesProvider = ({ children } : IPreferencesProvider) => {  
  return (
    <PreferencesContext.Provider 
      value={{}}
    >
      {children}
    </PreferencesContext.Provider>
  )
}

export const usePreferencesContext = () => {
  const context = useContext(PreferencesContext)

  if (!context) {
    throw new Error('usePreferencesContext must be used within an PreferencesProvider')
  }

  return context
}