import styled from 'styled-components'

export const Container = styled.div``

export const Fade = styled.button`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999998;
`

export const Content = styled.div`
  width: 44rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: #fff;
  padding: 2rem 1.6rem;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999;

  > div {
    margin-bottom: 1.2rem;
  }

  > button {
    margin: 1rem auto 0 0;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  > h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  > button {
    svg {
      font-size: 1.8rem;
    }
  }
`
