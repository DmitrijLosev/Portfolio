import React from 'react';
import styled from "styled-components";
import ProjectTitlePhoto from "./../../../assets/images/project.webp";
import {StyledText} from "../../../components/StyledText";

export const Project = () => {

    type ProjectsItemType = {
        projectId: number,
        projectTitlePhoto: string,
        projectTitle: string,
        projectUsedSkills: Array<string>,
        projectDescription: string
    }
    type ProjectsItemsType = Array<ProjectsItemType>

    const ProjectsItems = [
        {
            projectId: 1,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "Title 1",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            projectId: 2,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "Title 2",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            projectId: 3,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "Title 3",
            projectUsedSkills: ["HTML 5", "CSS"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            projectId: 4,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "Title 4",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX", "STYLED COMPONENTS"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]


    return (
        <>
            {ProjectsItems.map((projectItem) => (
                <StyledProjectBox key={projectItem.projectId}>
                    <a href={""}>
                        <StyledProjectTitlePhoto src={projectItem.projectTitlePhoto} alt=""/>
                    </a>
                    <StyledProjectTitle>{projectItem.projectTitle}</StyledProjectTitle>
                    {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                        <span key={index}>{skillItem}</span>
                    ))}
                    <StyledText>{projectItem.projectDescription}</StyledText>
                </StyledProjectBox>
            ))}
        </>
    )
}


const StyledProjectBox = styled.div`
max-width:520px;
  width:100%;

`
const StyledProjectTitle = styled.h3`
`

const StyledProjectTitlePhoto = styled.img`
  width: 100%;
  height: 390px;
  object-fit: cover;
`