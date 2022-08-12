import React from 'react'
import { IoMdLogOut } from '@react-icons/all-files/io/IoMdLogOut'

import MenuBusiness from "../business"

interface IMenuView {
  children: React.ReactNode
}

import {
  Header,
  HStack,
  BtnAction,
} from "./styles"

export default function MenuView({ children } : IMenuView) {
  const { 
    authState,
    helloTitle
  } = MenuBusiness()
  
  return (
    <>
      {authState && (
        <Header>
          <h1>{helloTitle}</h1>

          <HStack>
            <BtnAction>Home</BtnAction>
            <BtnAction>Preferências</BtnAction>
            <BtnAction>Histórico de Lançamentos</BtnAction>
            <BtnAction>
              <span>Sair</span>
              <IoMdLogOut />
            </BtnAction>
          </HStack>
        </Header>
      )}

      {children}
    </>
  )
}