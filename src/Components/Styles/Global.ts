import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    font-family: 'Poppins', sans-serif;

}

body {
  
  height: 100vh;
}

.svg_icons {
    transform: scale(1.8);
    text-align: center;
  }
`;

export default GlobalStyling