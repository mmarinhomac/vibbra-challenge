import { createContext, useContext, useState } from 'react'

interface IMenuContext {
  helloTitle: string
  setHelloTitle: React.Dispatch<React.SetStateAction<string>>
}

interface IMenuProvider {
  children: React.ReactElement
}

const initialState = {
  helloTitle: '', 
  setHelloTitle: () => {}
}

const MenuContext = createContext<IMenuContext>(initialState)

export const MenuProvider = ({ children } : IMenuProvider) => {
  const [helloTitle, setHelloTitle] = useState(initialState.helloTitle)

  return (
    <MenuContext.Provider 
      value={{
        helloTitle, setHelloTitle
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenuContext must be used within an MenuProvider')
  }

  return context
}