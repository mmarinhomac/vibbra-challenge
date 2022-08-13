import styled from 'styled-components'

export const HStack = styled.div`
  display: flex;
  align-items: center;
`

export const Container = styled.main`
  min-height: 100%;
  width: 100%;
  max-width: 1200px;
`

export const ContentHeader = styled(HStack).attrs({
  as: 'div'
})`
  margin-top: 1rem;
  justify-content: space-between;

  > div {
    gap: 1.5rem;
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  margin: 1.5rem 0 1rem;
`

export const BiRowContent = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
  grid-gap: 1rem;
`

export const CardChart = styled.div`
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.1);
`
