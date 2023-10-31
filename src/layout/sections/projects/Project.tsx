import React from 'react';
import ProjectTitlePhoto from "./../../../assets/images/project.jpg";
import ProjectTitlePhoto2x from "./../../../assets/images/project2x.jpg";
import ProjectTitlePhoto3x from "./../../../assets/images/project3x.jpg";
import ProjectTitlePhotoWebp from "./../../../assets/images/project.webp";
import ProjectTitlePhotoWebp2x from "./../../../assets/images/project2x.webp";
import ProjectTitlePhotoWebp3x from "./../../../assets/images/project3x.webp";
import {S} from "./Project_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledSpan} from "../../../components/StyledSpan";


export const Project: React.FC<{ showAllProjects: boolean }> = (props) => {


    const ProjectsItemsStart = [
        {
            projectId: 1,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "SOCIAL NETWORK",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            linkOnGitHub: "https://www.github.com/DmitrijLosev/losev-social-network"
        },
        {
            projectId: 2,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "PORTFOLIO",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            linkOnGitHub: "https://www.github.com/DmitrijLosev/Portfolio"
        }]

    const ProjectsItems = [
        {
            projectId: 1,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "SOCIAL NETWORK",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            linkOnGitHub: "https://www.github.com/DmitrijLosev/losev-social-network"
        },
        {
            projectId: 2,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "PORTFOLIO",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            linkOnGitHub: "https://www.https://github.com/DmitrijLosev/Portfolio"
        },
        {
            projectId: 3,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "NATURAL CARDS",
            projectUsedSkills: ["HTML 5", "CSS"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            linkOnGitHub: "https://www.github.com/DmitrijLosev/Cards"
        },
        {
            projectId: 4,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "FREECODECAMP PROJECTS",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX", "STYLED COMPONENTS"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            linkOnGitHub: "https://www.github.com/DmitrijLosev/freeCodeCamp"
        }
    ]


    return (<>
            {
                !props.showAllProjects
                    ? ProjectsItemsStart.map((projectItem) => (
                        <S.ProjectBox key={projectItem.projectId}>
                            <FlexWrapper id="projectWrapper" direction="column">
                                <S.PhotoWrapper>
                                    <S.ProjectLink id="projectLink" role="link" aria-label="LinkToGitHub"
                                                   href={projectItem.linkOnGitHub}
                                                   target="_blank">Link to GitHub</S.ProjectLink>
                                    <picture>
                                        <source
                                            type="image/webp"
                                            srcSet={`${ProjectTitlePhotoWebp} 1x,
                                                 ${ProjectTitlePhotoWebp2x} 2x, ${ProjectTitlePhotoWebp3x} 3x`}
                                        />
                                        <source
                                            type="image/jpeg"
                                            srcSet={`${ProjectTitlePhoto} 1x, ${ProjectTitlePhoto2x} 2x, 
                                                ${ProjectTitlePhoto3x} 3x`}
                                        />
                                        <S.ProjectTitlePhoto id="projectTitle" aria-label="project-title" role="img"
                                                             src={projectItem.projectTitlePhoto}
                                                             srcSet={`${ProjectTitlePhoto2x} 2x, 
                                                             ${ProjectTitlePhoto3x} 3x`}
                                                             alt="Project's Tittle photo is here"/>
                                    </picture>
                                </S.PhotoWrapper>
                                <S.ProjectTitle role="heading"
                                                aria-level={3}>{projectItem.projectTitle}</S.ProjectTitle>
                                <FlexWrapper id="skillsSpans" wrap="wrap">
                                    {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                                        <StyledSpan key={index} role="generic" aria-label="tools">{skillItem}</StyledSpan>
                                    ))}
                                </FlexWrapper>
                                <S.ProjectText role="paragraph"
                                               aria-label="project-description">{projectItem.projectDescription}</S.ProjectText>
                            </FlexWrapper>
                        </S.ProjectBox>
                    ))
                    : ProjectsItems.map((projectItem) => (
                        <S.ProjectBox key={projectItem.projectId}>
                            <FlexWrapper id="projectWrapper" direction="column">
                                <S.PhotoWrapper>
                                    <S.ProjectLink id="projectLink" role="link" aria-label="LinkToGitHub"
                                                   href={projectItem.linkOnGitHub}
                                                   target="_blank">Link to GitHub</S.ProjectLink>
                                    <S.ProjectTitlePhoto id="projectTitle" aria-label="project-title" role="img"
                                                         src={projectItem.projectTitlePhoto}
                                                         alt="Project's Tittle photo is here"/>
                                </S.PhotoWrapper>
                                <S.ProjectTitle role="heading"
                                                aria-level={3}>{projectItem.projectTitle}</S.ProjectTitle>
                                <FlexWrapper id="skillsSpans" wrap="wrap">
                                    {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                                        <StyledSpan role="generic" aria-label="tool" key={index}>{skillItem}</StyledSpan>
                                    ))}
                                </FlexWrapper>
                                <S.ProjectText role="paragraph"
                                               aria-label="project-description">{projectItem.projectDescription}</S.ProjectText>
                            </FlexWrapper>
                        </S.ProjectBox>
                    ))
            }
        </>
    )
}

