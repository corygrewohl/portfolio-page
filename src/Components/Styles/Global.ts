import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
    /* color: #E1E2E2; */

}

.svg_icons {
    transform: scale(1.8);
    text-align: center;
  }

  h2.title {
    font-size: 45px;
    font-weight: 500;
    align-self: flex-start;

    @media (min-width: 3000px) {
      font-size: 56px;
    }
  }
`;

export default GlobalStyling