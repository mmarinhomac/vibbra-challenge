import styled from 'styled-components'

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`

export const HStack = styled.div`
  display: flex;
  align-items: center;
`

export const Container = styled.main`
  min-height: 100%;
  width: 100%;
  max-width: 1200px;

  > h2 {
    margin-bottom: -0.6rem;
    font-size: 1.4rem;
  }
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.15);
  margin: 1.5rem 0 1rem;
`

export const GeneralContent = styled(HStack)`
  gap: 25%;
  margin: 1.5rem 0 3rem;

  > div {
    gap: 1rem;

    > span {
      font-weight: 600;
    }

    > div {
      gap: 2rem;
      white-space: nowrap;
    }
  }
`

export const RecordsContent = styled(VStack)`
  margin: 1.5rem 0 3rem;
`

export const RecordsContentHeader = styled(HStack)`
  justify-content: space-between;
  margin-bottom: 1rem;
`

interface ITab {
  isSelect: boolean
}

export const Tab = styled.button<ITab>`
  color: #fff;
  padding: 0.5rem 1.5rem;
  background: #6c757d;

  ${({ isSelect }) => isSelect && 'background: #343a40;'}
`