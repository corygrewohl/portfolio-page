import styled from "styled-components";

const ProjectItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;

  min-height: 450px;
  min-width: 1000px;
  color: #e1e2e2;
  border: solid 2px #e1e2e2;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  img {
    width: auto;
    max-height: 350px;
  }

  .project-info {
  }

  .skills {
    padding: 20px 0px;
    display: flex;
    gap: 10px;

    img {
        width: auto;
        max-height: 50px;
    }
  }

  .project-info-buttons {
    margin-top: 20px;
  }
`;

export default ProjectItemContainer;
