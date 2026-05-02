import styled from 'styled-components'

export const ThemeButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.08);
  }
`
