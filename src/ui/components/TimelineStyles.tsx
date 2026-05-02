import styled from 'styled-components'

export const Page = styled.div`
  background: ${({ theme }) => theme.colors.canvas};
  min-height: 100vh;
  padding: 40px 0;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding: 0;
  }
`

export const Container = styled.div`
  width: 794px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.card};
  padding: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    width: 100%;
    min-height: auto;
    margin: unset;
    padding: 20px;
    box-shadow: none;
    border-radius: 0;
  }
`

export const Title = styled.h1`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
`

export const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 60px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding-left: 40px;
  }
`

export const VerticalLine = styled.div`
  position: absolute;
  left: 27px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    left: 7px;
  }
`

export const Item = styled.div`
  position: relative;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
`

export const Dot = styled.div`
  position: absolute;
  left: -42px;
  top: 6px;
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.bg};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border};
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  padding: 16px 18px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
`

export const ItemTitle = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const Subtitle = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`

export const Date = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 4px;
`

export const List = styled.ul`
  margin-top: 8px;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.text};
  max-width: 100%;
`

export const ListItem = styled.li`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text};
`

export const Stage = styled.div`
  margin-bottom: 50px;
`

export const StageHeader = styled.div`
  margin-bottom: 16px;
`

export const StageTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const StageDescription = styled.p`
  font-size: 0.9rem;

  color: ${({ theme }) => theme.colors.muted};
`
