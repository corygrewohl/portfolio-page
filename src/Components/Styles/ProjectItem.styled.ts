import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #1D2228;

  min-height: 450px;
  min-width: 1000px;
  border: solid 2px #e1e2e2;

  h2 {
    font-size: 24px;
    font-weight: 500;
    color: #fb8122;
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;

    h2 {
      color: #3c91e6;
    }
  }

  .project-image {
    width: auto;
    max-height: 350px;
    border: solid 3px #0c7c59;
  }

  .project-info-buttons {
    margin-top: 20px;
  }
`;

export const SkillsListContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  gap: 10px;

  img {
    width: auto;
    max-height: 50px;
  }
`;
