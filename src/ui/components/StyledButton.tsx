import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
