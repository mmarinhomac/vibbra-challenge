import React from 'react'
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut'

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
              <FiLogOut />
            </BtnAction>
          </HStack>
        </Header>
      )}
    </>
  )
}
