import { createContext, useContext, useState } from 'react'

interface IMenuContext {
  helloTitle: string | null
  setHelloTitle: React.Dispatch<React.SetStateAction<string | null>>
  menuSelection: number
  setMenuSelection: React.Dispatch<React.SetStateAction<number>>
}

interface IMenuProvider {
  children: React.ReactElement
}

const initialState: IMenuContext = {
  helloTitle: null,
  setHelloTitle: () => {},
  menuSelection: 0,
  setMenuSelection: () => {},
}

const MenuContext = createContext<IMenuContext>(initialState)

export const MenuProvider = ({ children }: IMenuProvider) => {
  const [helloTitle, setHelloTitle] = useState(initialState.helloTitle)
  const [menuSelection, setMenuSelection] = useState(initialState.menuSelection)

  return (
    <MenuContext.Provider
      value={{
        helloTitle,
        setHelloTitle,
        menuSelection,
        setMenuSelection,
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
