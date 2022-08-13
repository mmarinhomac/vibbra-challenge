import React from 'react'

import { MenuProvider } from '../../context'

import MenuView from '../index'

interface IMenuLayout {
  children: React.ReactNode
}

export default function MenuLayout({ children } : IMenuLayout) {
  return (
    <MenuProvider>
      <>
        <MenuView />
        {children}
      </>
    </MenuProvider>
  )
}
