import styled from "styled-components";

export const LandingScreenContainer = styled.div`
  height: 100vh;
  min-height: 800px;
  background-color: #1d2228;

  .hero-container {
    padding: 4em 12em 0em 12em;

    display: flex;
    justify-content: space-between;

    .hero-statement-container {
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .hero-statement {
        color: #e1e2e2;
        font-size: 55px;
        font-weight: 700;
      }

      .meet-me {
        font-size: 20px;
        color: #3c91e6;
      }
    }

    .hero-image-container {
      img {
        width: auto;
        max-height: 450px;

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
    }
  }
`;
