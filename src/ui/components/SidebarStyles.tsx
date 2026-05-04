import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  position: fixed;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    transform: none;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    border-left: none;
    padding: 12px 16px;
    height: auto;
  }
`

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 6px 0;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    height: 40px;
    width: 1px;
    margin: 0 6px;
  }
`

export const IconButton = styled.button<{ $isActive?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  cursor: ${({ $isActive }) => ($isActive ? 'default' : 'pointer')};
  pointer-events: ${({ $isActive }) => ($isActive ? 'none' : 'auto')};
  color: ${({ theme, $isActive }) =>
    $isActive ? '#5DADE2' : theme.colors.muted};
  background: ${({ $isActive }) =>
    $isActive ? 'rgba(93, 173, 226, 0.12)' : 'transparent'};
  transition: ${({ $isActive }) => ($isActive ? 'none' : 'all 0.2s ease')};

  ${({ $isActive, theme }) =>
    !$isActive &&
    `
    &:hover {
      transform: scale(1.08);
      color: ${theme.colors.text};
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: currentColor;
      opacity: 0.06;
      transform: translateX(-100%);
      transition: transform 0.25s ease;
      z-index: -1;
    }

    &:hover::before {
      transform: translateX(0);
    }
  `}
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: contents;
`
