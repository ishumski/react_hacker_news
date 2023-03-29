import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: Verdana, Geneva, sans-serif;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    background: ${({theme}) => theme.colors.lightgrey};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`
