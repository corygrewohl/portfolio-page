import React from "react";
import ProjectsContainer from "./Styles/Projects.styled";
import Projects from "../project_data";
import ProjectItem from "./ProjectItem";
import { Stack } from "@chakra-ui/react";

import Lego from "../assets/legobricks.jpg";

function ProjectsScreen() {
  return (
    <Stack
      padding={["0em 0em", null, null, "4em 12em 2em 12em"]}
      paddingInline={['0px 0px', null, null]}
      minH="100vh"
      bgColor="#181c21"
      bgImage={Lego}
      bgSize={["115%", null, 'cover']}
      bgPos="left 10%"
      bgAttachment="fixed"
      direction="column"
      align-items="center"
      gap="20px"
    >
      <h2 className="title" id="projects">
        Projects
      </h2>
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
    </Stack>
  );
}

export default ProjectsScreen;
