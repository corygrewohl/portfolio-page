import React from "react";
import ProjectsContainer from "./Projects.styled";
import Projects from "../../Data/project_data";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";

function ProjectsScreen() {
  return (
    <ProjectsContainer>
      <h2 className="title" id="projects">
        Projects
      </h2>
      <ProjectCarousel
        slides={Projects}
      />
    </ProjectsContainer>
  );
}

export default ProjectsScreen;
