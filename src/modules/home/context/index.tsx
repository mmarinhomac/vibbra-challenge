import { createContext, useContext, useState } from 'react'

interface IHomeContext {}

interface IHomeProvider {
  children: React.ReactElement;
}

const initialState = {}

const HomeContext = createContext<IHomeContext>(initialState)

export const HomeProvider = ({ children } : IHomeProvider) => {  
  return (
    <HomeContext.Provider 
      value={{}}
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