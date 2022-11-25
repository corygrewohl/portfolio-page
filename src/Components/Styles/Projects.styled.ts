import styled from "styled-components";
import Lego from '../../assets/legobricks.jpg';


const ProjectsContainer = styled.div`
  padding: 4em 12em 4em 12em;

  min-height: 100vh;
  background-color: #181c21;
  background-image: url(${Lego});
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: left 10%;
  background-attachment: fixed;
  padding: 4em 12em 0em 12em;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  color: #E1E2E2;

  h2.title {
    background-color: #1d222899;
    padding-inline: 10px 10px;
  }

  @media (max-width: 1020px) {
    background-size: cover;
  }
`;

export default ProjectsContainer;
