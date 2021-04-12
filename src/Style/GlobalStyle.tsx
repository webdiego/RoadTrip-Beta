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
  background: linear-gradient(14deg, rgba(176,89,242,1) 1%, rgba(156,252,248,1) 100%);
  background-repeat:no-repeat;
}
h2{
  color:white;
  font-family: 'Roboto Mono', monospace;
  font-weight:300;
  }
select,input{
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  
}

input:focus, textarea:focus, select:focus{
        outline: none;
    }

input[type=number] {
  -moz-appearance: textfield;
}

`;
export default GlobalStyle;
