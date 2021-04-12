import "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-size:62,5%;
  font-family: 'Fredoka One', cursive;
  /* font-family: 'Roboto Mono', monospace; */
}

`;
export default GlobalStyle;
