import { Button, ButtonGroup, Heading, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import {
  ProjectItemContainer,
  SkillsListContainer,
} from "./Styles/ProjectItem.styled";
import LegoPic from "../assets/Lego.jpg"

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
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap="20px"
      padding="20px"
      bgColor="#1d2228"
      minH="450px"
      minW="1000px"
      border="solid 2px #e1e2e2"
      color="#e1e2e2"
    >
      <div className="project-item">
        <Heading fontSize="24px" fontWeight="500" color="#fb8122">
          {name}
        </Heading>
        <Text>{description}</Text>
        <Stack padding='20px 0px' gap='10px'>
          {skills.map((currentSkill, index) => {
            return <img key={index} src={currentSkill} alt="" />;
          })}
        </Stack>
        <p>{date}</p>
        <ButtonGroup
          variant="solid"
          marginTop="20px"
          colorScheme="green"
          color="#E1E2E2"
        >
          <Button backgroundColor="#0C7C59">
            <a href={repo} target="_blank">
              View Code
            </a>
          </Button>
          <Button backgroundColor="#0C7C59">
            <a href={demo} target="_blank">
              Live Demo
            </a>
          </Button>
        </ButtonGroup>
      </div>
      <img src={image} alt="" className="project-image" />
    </Stack>
  );
};

export default ProjectItem;
