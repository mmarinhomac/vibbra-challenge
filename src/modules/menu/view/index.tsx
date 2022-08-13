import React from 'react'
import { IoMdLogOut } from '@react-icons/all-files/io/IoMdLogOut'

import MenuBusiness from "../business"

import {
  Header,
  HStack,
  BtnAction,
} from "./styles"

export default function MenuView() {
  const { 
    authState,
    helloTitle,
    menuSelection,
    onLogout,
    onMenuChoice
  } = MenuBusiness()
  
  return (
    <>
      {authState && (
        <Header>
          <h1>{helloTitle}</h1>

          <HStack>
            <BtnAction 
              isSelect={menuSelection === 0} 
              onClick={() => onMenuChoice({ number: 0})}
            >
              Home
            </BtnAction>
            <BtnAction 
              isSelect={menuSelection === 1} 
              onClick={() => onMenuChoice({ number: 1})}
            >
              Preferências
            </BtnAction>
            <BtnAction 
              isSelect={menuSelection === 2} 
              onClick={() => onMenuChoice({ number: 2})}
            >
              Histórico
             de Lançamentos</BtnAction>
            <BtnAction onClick={onLogout}>
              <span>Sair</span>
              <IoMdLogOut />
            </BtnAction>
          </HStack>
        </Header>
      )}
    </>
  )
}
