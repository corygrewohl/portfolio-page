import styled from "styled-components";

export const AboutMeContainer = styled.div`
  height: 90vh;
  min-height: 750px;
  background-color: #181c21;
  padding: 4em 12em 0em 12em;
`;

export const AboutMeContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 200px;

  img {
    width: auto;
    max-height: 550px;

    border: 4px solid #e1e2e2;
    border-radius: 10px;
  }
`;
