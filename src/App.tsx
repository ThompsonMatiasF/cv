import { FC } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '@ui/routes/routes'
import { Sidebar } from '@ui/components/Sidebar'

export const App: FC = () => {
  const location = useLocation()

  return (
    <AppContainer>
      <Sidebar />
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.canvas};

  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding-top: 64px;
  }
`
