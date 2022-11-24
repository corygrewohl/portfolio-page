import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { FC } from "react";
import { ProjectItemContainer, SkillsListContainer } from "./Styles/ProjectItem.styled";

interface ProjectItemProps {
  id: number;
  name: string;
  description: string;
  image: string;
  skills: string[];
  date: string;
  repo: string;
  demo: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  id,
  name,
  description,
  image,
  skills,
  date,
  repo,
  demo,
}) => {
  return (
    <ProjectItemContainer>
      <div className="project-item">
        <h2>{name}</h2>
        <p>{description}</p>
        <SkillsListContainer>
          {skills.map((currentSkill, index) => {
            return <img key={index} src={currentSkill} alt="" />;
          })}
        </SkillsListContainer>
        <p>{date}</p>

        <ButtonGroup
          variant="solid"
          marginTop="20px"
          colorScheme="green"
          color="#E1E2E2"
        >
          <Button backgroundColor="#0C7C59"><a href={repo} target='_blank'>View Code</a></Button>
          <Button backgroundColor="#0C7C59"><a href={demo} target='_blank'>Live Demo</a></Button>
        </ButtonGroup>
      </div>
      <img src={image} alt="" className="project-image"/>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
