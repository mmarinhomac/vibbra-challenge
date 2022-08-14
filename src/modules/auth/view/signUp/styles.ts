import styled from 'styled-components'

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`

export const HStack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Container = styled.main`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3.6rem 1.8rem;
`

export const Form = styled(VStack).attrs({
  as: 'form',
})`
  width: 100%;
  max-width: 440px;

  & > h1 {
    font-size: 1.6rem;
    font-weight: 700;
  }

  & > span {
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0.1rem 0 2rem;
  }

  div:nth-of-type(1) {
    justify-content: center;
    margin: 0.5rem 0 1.8rem;

    div {
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.15);
      margin: 0;
    }

    span {
      margin: 0 1.6rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.35);
    }
  }

  & > div > input {
    margin-bottom: 1.2rem;
  }

  div:nth-of-type(7) {
    margin-bottom: 1.8rem;
  }
`

interface IBtnSocialLogin {
  iconColor?: string
}

export const BtnSocialLogin = styled(HStack).attrs({
  as: 'button',
})<IBtnSocialLogin>`
  white-space: nowrap;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 0.8rem 0;
  margin-bottom: 0.6rem;

  svg {
    font-size: 1.4rem;
    margin-right: 0.5rem;

    ${({ iconColor }) => iconColor && `color: ${iconColor};`}
  }

  span {
    font-size: 0.9rem;
  }
`

export const BtnSubmit = styled.button`
  white-space: nowrap;
  padding: 0.8rem 0;
  background: #000;
  color: #fff;
  border-radius: 6px;
`

export const BtnSignUp = styled.button`
  white-space: nowrap;
  margin-top: 1.8rem;
  font-weight: 400;

  strong {
    font-weight: 600;
  }
`
