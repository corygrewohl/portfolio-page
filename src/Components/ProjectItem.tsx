import React, { FC } from 'react'

interface ProjectItemProps {
    name: string;
    description: string;
    image: string;
    skills: string[];
    date: string;
    repo: string;
    demo: string;
}

const ProjectItem: FC<ProjectItemProps> = ({name, description, image, skills, date, repo, demo}) => {
    return (
        <div>
            
        </div>
    )
}

export default ProjectItem