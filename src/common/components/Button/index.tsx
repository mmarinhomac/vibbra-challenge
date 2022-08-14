import React, { MouseEventHandler } from 'react'

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement> | (() => any)
  children: string | React.ReactNode
}

import { Container } from './styles'

export default function Button({ onClick, children }: IButton) {
  return <Container onClick={onClick}>{children}</Container>
}
