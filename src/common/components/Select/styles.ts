import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
  }
`

export const Fade = styled.button`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999998;
`

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.5rem;
  position: absolute;
  background: #fff;
  padding: 0.4rem 0;
  z-index: 999999;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.1);

  > button {
    width: 100%;
    padding: 0.2rem 2.5rem;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`
