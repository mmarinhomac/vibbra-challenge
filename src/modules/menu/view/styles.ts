import styled from 'styled-components'

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
` 

export const Header = styled(HStack).attrs({
  as: 'header'
})`
  width: 100%;
  max-width: 1200px;
  padding: 1.8rem 0;

  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  & > div {
    gap: 2.5rem;
  }
`

interface IBtnAction {
  isSelect?: boolean
}

export const BtnAction = styled(HStack).attrs({
  as: 'button'
})<IBtnAction>`
  gap: 0.3rem;

  ${({ isSelect }) => isSelect && 'font-weight: 700;'}

  svg {
    font-size: 1.3rem;
  }
`
