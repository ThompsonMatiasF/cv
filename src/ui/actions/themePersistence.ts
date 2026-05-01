export const THEME_KEY = 'theme-preference'

export type Theme = 'light' | 'dark'

export function saveThemeToStorage(theme: Theme) {
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch (e) {
    console.warn('[theme-storage] Failed to save theme', e)
  }
}

export function getThemeFromStorage(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_KEY)
    if (value === 'light' || value === 'dark') return value
    return null
  } catch (e) {
    console.warn('[theme-storage] Failed to read theme', e)
    return null
  }
}
