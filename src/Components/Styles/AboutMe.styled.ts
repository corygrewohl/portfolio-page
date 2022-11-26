import styled from "styled-components";

export const AboutMeContainer = styled.div`
  min-height: 750px;
  background-color: #181c21;
  padding: 4em 12em 2em 12em;
  @media (max-width: 990px) {
    padding: 2em;
  }

  color: #e1e2e2;
`;

export const AboutMeContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  img {
    /* width: auto; */
    max-height: 550px;

    border: 4px solid #e1e2e2;
    border-radius: 10px;
  }

  .info {
    max-width: 500px;

    img {
      max-height: 22px;
      width: auto;
      border: none;
      border-radius: 0px;
      display: inline;
    }
  }

  @media (max-width: 1375px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    ${AboutMeContainer} {
      /* height: 800px; */
      padding: 2em;
    }
    img {
      /* width: auto; */
      max-height: 500px;
    }
  }
`;
