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

  padding: 48px 24px;
`

export const Form = styled(VStack).attrs({
  as: "form"
})`
  width: 100%;
  max-width: 440px;

  & > h1 {
    font-size: 24px;
    font-weight: 700;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    margin: 2px 0 34px;
  }

  div:nth-of-type(1) {
    justify-content: center;
    margin: 8px 0 24px;

    div {
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.15);
      margin: 0;
    }

    span {
      margin: 0 14px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.35);
    }
  }

  & > div > input {
    margin-bottom: 18px;
  }

  div:nth-of-type(7) {
    margin-bottom: 34px;
  }
`

interface IBtnSocialLogin {
  iconColor?: string;
}

export const BtnSocialLogin = styled(HStack).attrs({
  as: 'button'
})<IBtnSocialLogin>`
  white-space: nowrap;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 8px 0;
  margin-bottom: 10px;

  svg {
    font-size: 24px;
    margin-right: 8px;

    ${({ iconColor }) => iconColor && `color: ${iconColor};`}
  }

  span {
    font-size: 14px;
  }
`

export const BtnText = styled.button`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.45);
`

export const BtnSubmit = styled.button`
  white-space: nowrap;
  padding: 14px 0;
  background: #000;
  color: #fff;
  border-radius: 6px;
`

export const BtnSignUp = styled.button`
  white-space: nowrap;
  margin-top: 34px;
  font-weight: 400;

  strong {
    font-weight: 600;
  }
`