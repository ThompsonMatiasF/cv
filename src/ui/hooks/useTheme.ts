import { useContext } from 'react'
import { ThemeContext } from '@ui/theme/theme.context'

export const useTheme = () => useContext(ThemeContext)
