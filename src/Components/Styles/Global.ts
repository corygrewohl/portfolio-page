import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    font-family: 'Poppins', sans-serif;
    /* color: #E1E2E2; */

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

  h2.title {
    font-size: 45px;
    font-weight: 500;
    align-self: flex-start;
  }
`;

export default GlobalStyling