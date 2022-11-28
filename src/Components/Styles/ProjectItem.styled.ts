import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #181C21;

  min-height: 450px;
  min-width: 100%;
  border: solid 3px #e1e2e2;

  color: #e1e2e2;

  transition: background-color 0.3s, border 0.5s;
  &:hover {
    background-color: #1d2228;
    border: solid 3px #3C91E6;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    color: #fb8122;
  }

  &:nth-child(2n + 1) {
    @media (min-width: 1020px) {
      flex-direction: row-reverse;
    }

    &:hover {
      background-color: #1d2228;
      border: solid 3px #FB8122;
  }

    h2 {
      color: #3c91e6;
    }
  }

  .project-image {
    width: 60%;
    border: solid 3px #0c7c59;
  }

  .project-info-buttons {
    margin-top: 20px;
  }

  @media (max-width: 1020px) {
    padding: 2em;
    min-width: 100px;
    flex-direction: column;
    .project-image {
      width: 100%;
    }
  }
`;

export const SkillsListContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: auto;
    max-height: 50px;

    @media (max-width: 1020px) {
      max-height: 20px;
    }
  }
`;
