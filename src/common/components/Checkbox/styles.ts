import styled from 'styled-components'

interface IContainer {
  isChecked: boolean
}

export const Container = styled.label<IContainer>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  cursor: pointer;

  label {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      opacity: 0;
    }

    svg {
      color: rgba(0, 0, 0, 0.2);
      font-size: 20px;
      position: absolute;
      display: none;
    }

    svg:nth-of-type(1) {
      ${({ isChecked }) => !isChecked && 'display: flex;'};
    }
    svg:nth-of-type(2) {
      ${({ isChecked }) => isChecked && 'color: #000; display: flex;'};
    }
  }

  span {
    font-size: 0.9rem;
    font-weight: 400;
  }
`
