import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string
    card: string
    canvas: string
    text: string
    muted: string
    border: string
    sidebar: string
    sidebarText: string
    sidebarMuted: string
  }
}
