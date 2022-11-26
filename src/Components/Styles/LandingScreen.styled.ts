import styled from "styled-components";
import Lego from "../../assets/LegoFull.jpg";
import Arrows from "../Styles/Arrows.styled";

export const LandingScreenContainer = styled.div`
  height: 100vh;
  min-height: 800px;
  background-color: #1d2228;
  background-image: url(${Lego});
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: left 10%;
  background-attachment: fixed;
  color: #0c7c59;

  @media (max-width: 990px) {
    background-size: cover;
  }
`;

export const HeroContainer = styled.div`
  padding: 4em 12em 0em 12em;

  display: flex;
  justify-content: space-between;

  .hero-statement-container {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* max-width: 500px; */
    color: #0c7c59;

    .hero-statement {
      font-size: 60px;
      font-weight: 700;
      * {
        color: #e1e2e2;
      }
      @media (max-width: 500px) {
        font-size: 36px;
      }
    }

    .meet-me {
      font-size: 24px;
      color: #fb8122;
    }
  }
  @media (max-width: 990px) {
    padding: 2em;

    ${Arrows} {
      display: none;
    }
    .hero-statement {
    font-size: 10px;
    }
  }
`;

export const HeroImageContainer = styled.div`
  img {
    width: auto;
    min-height: 550px;
    min-width: 370px;
    max-height: 550px;

    border: 4px solid #e1e2e2;
    border-radius: 10px;
  }

  .border-gradient {
    border-image: linear-gradient(var(--angle), #3c91e6, #fb8122) 1;
    animation: 4s rotate linear infinite;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
`;
