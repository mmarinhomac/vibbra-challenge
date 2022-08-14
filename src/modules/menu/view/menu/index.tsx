import React from 'react'
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut'

import MenuCore from '../../core'

import { Header, HStack, BtnAction } from './styles'

export default function MenuView() {
  const { authState, helloTitle, menuSelection, onLogout, onMenuChoice } =
    MenuCore()

  if (!authState) return <></>

  return (
    <Header>
      {helloTitle && (
        <button onClick={() => onMenuChoice({ number: 0 })}>
          <h1>{helloTitle}</h1>
        </button>
      )}

      <HStack>
        <BtnAction
          isSelect={menuSelection === 0}
          onClick={() => onMenuChoice({ number: 0 })}
        >
          Home
        </BtnAction>
        <BtnAction
          isSelect={menuSelection === 1}
          onClick={() => onMenuChoice({ number: 1 })}
        >
          Preferências
        </BtnAction>
        <BtnAction
          isSelect={menuSelection === 2}
          onClick={() => onMenuChoice({ number: 2 })}
        >
          Histórico de Lançamentos
        </BtnAction>
        <BtnAction onClick={onLogout}>
          <span>Sair</span>
          <FiLogOut />
        </BtnAction>
      </HStack>
    </Header>
  )
}
