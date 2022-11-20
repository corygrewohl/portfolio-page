import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    font-family: 'Poppins', sans-serif;

}

body {
  /* overflow-y: auto;
    overflow: overlay;
    overflow-x: none !important; */
  /* width: 100%; */
}

.svg_icons {
    transform: scale(1.8);
    text-align: center;
  }
`;

export default GlobalStyling