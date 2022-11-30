import styled from "styled-components";
import Lego from '../../assets/legobricks.jpg';


const ProjectsContainer = styled.div`
  /* min-height: 80vh; */
  background-color: #181c21;
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: left 10%;
  background-attachment: fixed;
  padding: 4em 12rem 2em 12rem;

  color: #E1E2E2;

  h2.title {
    padding-inline: 10px 10px;
  }

  @media (max-width: 1020px) {
    background-size: cover;
    padding: 4em 8em 2em 8em;
  }

  @media (max-width: 500px) {
    padding-inline: 0px 0px;
  }
`;

export default ProjectsContainer;
