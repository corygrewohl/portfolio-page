import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { FC } from 'react'
import ProjectItemContainer from './Styles/ProjectItem.styled';

interface ProjectItemProps {
    id: number,
    name: string;
    description: string;
    image: string;
    skills: string[];
    date: string;
    repo: string;
    demo: string;
}

const ProjectItem: FC<ProjectItemProps> = ({id, name, description, image, skills, date, repo, demo}) => {
    return (
        <ProjectItemContainer>
            <div className="project-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="skills">
                    {skills.map((currentSkill)=> {
                        return (
                            <img src={currentSkill} alt="" />
                        )
                    })}
                </div>
                <p>{date}</p>
                <ButtonGroup variant='solid' marginTop='20px' colorScheme='facebook'>
                    <Button>View Code</Button>
                    <Button>Live Demo</Button>
                </ButtonGroup>
            </div>
            <img src={image} alt="" />
        </ProjectItemContainer>
    )
}

export default ProjectItem