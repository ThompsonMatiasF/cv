import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@ui/hooks/useTheme'
import { ThemeButton } from './ThemeButton'

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'

  return (
    <ThemeButton onClick={toggle} title="Toggle theme">
      <FontAwesomeIcon
        icon={isLight ? faSun : faMoon}
        color={isLight ? '#F4D03F' : '#FFFFFF'}
      />
    </ThemeButton>
  )
}
