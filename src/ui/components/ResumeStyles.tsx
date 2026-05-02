import styled from 'styled-components'

export const PageBackground = styled.div`
  background: ${({ theme }) => theme.colors.canvas};
  min-height: 100vh;
  padding: 40px 0;

  &[data-variant='pdf'] {
    background: #ffffff;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding: 0;
  }
`

export const Container = styled.div`
  width: 794px;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1123px;
  margin: auto;
  background: ${({ theme }) => theme.colors.card};
  padding: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  &[data-variant='pdf'] {
    box-shadow: none;
    border-radius: 0;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    width: 100%;
    min-height: auto;
    margin: unset;
    padding: 20px;
    box-shadow: none;
    border-radius: 0;
  }
`

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  > * {
    min-width: 0;
  }

  &[data-variant='pdf'] {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 20px;
  }
`

export const Title = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};

  &[data-variant='pdf'] {
    color: #000;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    font-size: 1.6rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: normal;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.muted};

  &[data-variant='pdf'] {
    color: #444;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    font-size: 1rem;
  }
`

export const Description = styled.p`
  margin-top: 16px;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.text};

  &[data-variant='pdf'] {
    color: #000;
  }
`

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.border};
  object-fit: cover;
`

export const Section = styled.section`
  margin-bottom: 40px;

  &[data-variant='pdf'] {
    page-break-inside: avoid;
  }

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`

export const SectionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 6px;
  color: ${({ theme }) => theme.colors.text};

  &[data-variant='pdf'] {
    color: #000;
    border-bottom: 1px solid #ddd;
  }
`

export const Item = styled.div`
  margin-bottom: 16px;

  &[data-variant='pdf'] {
    page-break-inside: avoid;
  }
`

export const ItemTitle = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  &[data-variant='pdf'] {
    color: #000;
  }
`

export const ItemSubtitle = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};

  &[data-variant='pdf'] {
    color: #666;
  }
`

export const List = styled.ul`
  padding-left: 18px;
  margin-top: 8px;
`

export const ListItem = styled.li`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.text};

  &[data-variant='pdf'] {
    color: #000;
  }
`

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    gap: 8px;
  }
`

export const Skill = styled.span`
  background: ${({ theme }) => theme.colors.bg};
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  &[data-variant='pdf'] {
    background: #f5f5f5;
    border: 1px solid #ddd;
    color: #000;
  }
`

export const Contact = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};

  &[data-variant='pdf'] {
    color: #444;
  }
`

export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;

  &[data-variant='pdf'] {
    color: #000;
    text-decoration: none;
  }

  &:hover {
    color: #5dade2;
    text-decoration: underline;
  }

  svg {
    font-size: 0.9rem;
    transition: transform 0.15s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`
