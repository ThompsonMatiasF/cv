import { FC } from 'react'
import { useMatch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { routes, RouteConfig } from '@ui/routes/routes'
import { DownloadButton } from '@ui/components/DownloadButton'
import { ThemeToggle } from '@ui/components/ThemeToggle'
import { Nav, Divider, IconButton, NavLink } from '@ui/components/SidebarStyles'

const NavItem: FC<{ route: RouteConfig }> = ({ route }) => {
  const match = useMatch({ path: route.path, end: true })
  const isActive = Boolean(match)

  return (
    <NavLink to={route.path}>
      <IconButton $isActive={isActive}>
        <FontAwesomeIcon icon={route.icon} />
      </IconButton>
    </NavLink>
  )
}

export const Sidebar: FC = () => (
  <Nav>
    {routes.map((route) => (
      <NavItem key={route.path} route={route} />
    ))}
    <Divider />
    <DownloadButton fileName="Matias-Thompson-CV.pdf" />
    <ThemeToggle />
  </Nav>
)
