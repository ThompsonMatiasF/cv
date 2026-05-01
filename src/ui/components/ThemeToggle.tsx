import { StyledButton } from './StyledButton'
import { useTheme } from '@ui/hooks/useTheme'

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme()

  return (
    <StyledButton onClick={toggle}>
      {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </StyledButton>
  )
}
