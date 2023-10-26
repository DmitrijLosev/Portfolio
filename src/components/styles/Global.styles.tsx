import {createGlobalStyle} from "styled-components";
import {MyTheme} from "./MyTheme.styles";

export const GlobalStyles=createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Tinos', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${MyTheme.colors.primaryText};
    background-color: ${MyTheme.colors.primaryBgc}
  }

  ;

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  *:focus-visible {
    outline: 3px solid ${MyTheme.colors.primaryText};
  }
    
@media (prefers-reduced-motion: reduce) {
  animation:unset;
}




`