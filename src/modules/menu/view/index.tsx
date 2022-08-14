import React from 'react'

import { MenuProvider } from '../context'

import MenuView from './menu'

export default function MenuLayout() {
  return (
    <MenuProvider>
      <MenuView />
    </MenuProvider>
  )
}
