import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  getThemeFromStorage,
  saveThemeToStorage,
  THEME_KEY,
} from '@ui/actions/themePersistence'

describe('theme-storage', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  describe('saveThemeToStorage', () => {
    it('should save theme in localStorage', () => {
      saveThemeToStorage('dark')

      expect(localStorage.getItem(THEME_KEY)).toBe('dark')
    })

    it('should not throw if localStorage.setItem fails', () => {
      const spy = vi
        .spyOn(Storage.prototype, 'setItem')
        .mockImplementation(() => {
          throw new Error('fail')
        })

      expect(() => saveThemeToStorage('light')).not.toThrow()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('getThemeFromStorage', () => {
    it('should return stored theme if valid', () => {
      localStorage.setItem(THEME_KEY, 'light')

      const result = getThemeFromStorage()

      expect(result).toBe('light')
    })

    it('should return null if value is invalid', () => {
      localStorage.setItem(THEME_KEY, 'blue')

      const result = getThemeFromStorage()

      expect(result).toBeNull()
    })

    it('should return null if value does not exist', () => {
      const result = getThemeFromStorage()

      expect(result).toBeNull()
    })

    it('should return null if localStorage.getItem throws', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('fail')
      })

      const result = getThemeFromStorage()

      expect(result).toBeNull()
    })
  })
})
