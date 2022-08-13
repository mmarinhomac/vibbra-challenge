import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Item = styled.div`
  padding: 0.8rem 1.5rem;
  background: #495057;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    gap: 3rem;

    svg {
      margin-left: 0.4rem;
      font-size: 1.2rem;
    }
  }

  > div {
    > strong {
      color: #fff;
    }

    > span {
      color: #fff;
      font-size: 0.8rem;
      font-weight: 300;
    }

    > button {
      color: #fff;
      font-weight: 400;
      display: flex;
      align-items: center;
    }
  }
`
