import styled from 'styled-components'

/* ========================= */
/* Layout */
/* ========================= */

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.canvas};
  padding: 24px;

  @media print {
    padding: 0;
    background: white;
  }
`

export const Container = styled.main`
  width: 100%;
  max-width: 210mm;
  height: auto;
  background: ${({ theme }) => theme.card};
  display: grid;
  grid-template-columns: 300px 1fr;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media print {
    box-shadow: none;
  }
`

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.sidebar};
  color: ${({ theme }) => theme.sidebarText};
  padding: 32px;
`

export const Content = styled.section`
  flex: 1;
  padding: 40px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
`

/* ========================= */
/* Sidebar */
/* ========================= */

export const Header = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Name = styled.h1`
  font-size: 22px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.sidebarText};
`

export const Role = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
`

export const Subtitle = styled.p`
  font-size: 13px;
  opacity: 0.8;
  color: ${({ theme }) => theme.sidebarMuted};
`

export const SidebarSection = styled.section`
  margin-top: 24px;
`

export const SidebarTitle = styled.h3`
  font-size: 11px;
  text-transform: uppercase;
  margin-bottom: 10px;
  opacity: 0.7;
  color: ${({ theme }) => theme.sidebarMuted};
`

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`

export const SidebarItem = styled.li`
  font-size: 13px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.sidebarText};
`

/* ========================= */
/* Content */
/* ========================= */

export const Section = styled.section`
  margin-bottom: 28px;
`

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.border};
  padding-bottom: 4px;
`

export const SubTitle = styled.h4`
  font-size: 15px;
  margin-bottom: 4px;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
`

export const Small = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.muted};
`

export const List = styled.ul`
  padding-left: 18px;
  margin-top: 6px;
`

export const ListItem = styled.li`
  font-size: 14px;
  margin-bottom: 6px;
`

export const Article = styled.article`
  margin-bottom: 18px;
`

export const Avatar = styled.img`
  width: 126px;
  height: 126px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid rgba(255, 255, 255, 0.2);
`

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #87ceeb;
  }

  @media print {
    color: inherit;
    text-decoration: underline;
  }
`

export const FloatingControls = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 10;
  display: flex;
  gap: 12px;
  align-items: center;

  @media print {
    display: none;
  }
`
