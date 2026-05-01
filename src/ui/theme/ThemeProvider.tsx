import { ThemeProvider as StyledProvider } from 'styled-components'
import { ReactNode, useCallback, useMemo, useState } from 'react'
import { lightTheme, darkTheme } from './theme'
import {
  saveThemeToStorage,
  getThemeFromStorage,
} from '@ui/actions/themePersistence'
import { Theme, ThemeContext } from '@ui/theme/theme.context'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => getThemeFromStorage() || 'light'
  )

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      saveThemeToStorage(next)
      return next
    })
  }, [])

  const themeContextValue = useMemo(() => ({ theme, toggle }), [theme, toggle])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )
}
