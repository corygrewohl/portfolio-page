import React from "react";
import ProjectsContainer from "./Styles/Projects.styled";
import Projects from "../project_data";
import ProjectItem from "./ProjectItem";

function ProjectsScreen() {
  return (
    <ProjectsContainer>
      <h2 className="title" id="projects">Projects</h2>
      {Projects.map((currentProject) => {
        return (
            <ProjectItem
              key={currentProject.id}
              id={currentProject.id}
              name={currentProject.name}
              description={currentProject.description}
              image={currentProject.image}
              skills={currentProject.skills}
              date={currentProject.date}
              repo={currentProject.repo}
              demo={currentProject.demo}
            />
        );
      })}
    </ProjectsContainer>
  );
}

export default ProjectsScreen;
