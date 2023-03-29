import 'styled-components/macro'
declare module 'styled-components/macro' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      grey: string
      lightgrey: string
      transparent: string
      green: string
      blue100: string
      blue500: string,
      blue700: string
    }
  }
}
