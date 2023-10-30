import React from 'react';
import styled from "styled-components";
import ProjectTitlePhoto from "./../../../assets/images/project.webp";
import {StyledText} from "../../../components/StyledText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {MyTheme} from "../../../components/styles/MyTheme.styles";


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
                        <StyledProjectBox key={projectItem.projectId}>
                            <FlexWrapper id="projectWrapper" direction="column">
                                <StyledPhotoWrapper>
                                    <StyledProjectLink id="projectLink" role="link" aria-label="LinkToGitHub"
                                                       href={projectItem.linkOnGitHub}
                                                       target="_blank">Link to GitHub</StyledProjectLink>
                                    <StyledProjectTitlePhoto id="projectTitle" aria-label="project-title" role="img"
                                                             src={projectItem.projectTitlePhoto}
                                                             alt="Project's Tittle photo is here"/>
                                </StyledPhotoWrapper>
                                <StyledProjectTitle role="heading"
                                                    aria-level={3}>{projectItem.projectTitle}</StyledProjectTitle>
                                <FlexWrapper id="skillsSpans" wrap="wrap">
                                    {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                                        <StyledSpan key={index} role="generic" aria-label="tools">{skillItem}</StyledSpan>
                                    ))}
                                </FlexWrapper>
                                <StyledProjectText role="paragraph"
                                                   aria-label="project-description">{projectItem.projectDescription}</StyledProjectText>
                            </FlexWrapper>
                        </StyledProjectBox>
                    ))
                    : ProjectsItems.map((projectItem) => (
                        <StyledProjectBox key={projectItem.projectId}>
                            <FlexWrapper id="projectWrapper" direction="column">
                                <StyledPhotoWrapper>
                                    <StyledProjectLink id="projectLink" role="link" aria-label="LinkToGitHub"
                                                       href={projectItem.linkOnGitHub}
                                                       target="_blank">Link to GitHub</StyledProjectLink>
                                    <StyledProjectTitlePhoto id="projectTitle" aria-label="project-title" role="img"
                                                             src={projectItem.projectTitlePhoto}
                                                             alt="Project's Tittle photo is here"/>
                                </StyledPhotoWrapper>
                                <StyledProjectTitle role="heading"
                                                    aria-level={3}>{projectItem.projectTitle}</StyledProjectTitle>
                                <FlexWrapper id="skillsSpans" wrap="wrap">
                                    {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                                        <StyledSpan role="generic" aria-label="tool" key={index}>{skillItem}</StyledSpan>
                                    ))}
                                </FlexWrapper>
                                <StyledProjectText role="paragraph"
                                                   aria-label="project-description">{projectItem.projectDescription}</StyledProjectText>
                            </FlexWrapper>
                        </StyledProjectBox>
                    ))
            }
        </>
    )

}

const StyledProjectBox = styled.div`
  width: 363px;
  flex-grow: 1;
  


  ${FlexWrapper}[id="skillsSpans"] {
    height: auto;
    gap: 12px;
    padding: 11px 10px 0 26px;
    @media ${MyTheme.media.mobile} {
      padding: 11px 7px 0 18px;
    }
  }

  ${FlexWrapper}[id="projectWrapper"] {
    border-radius: 6px;
    background-color: ${MyTheme.colors.secondaryBgc};
  }

  @media ${MyTheme.media.desktop} {
    max-width: 522px;
  }
`
const StyledProjectTitle = styled.h3`
  color: #D9F2F2;
  font-size: 20px;
  font-weight: 600;
  padding: 29px 0 0 26px;
  max-width: 450px;
  @media ${MyTheme.media.mobile} {
    padding: 16px 0 0 18px;
  }

`

const StyledProjectTitlePhoto = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 100 / 81;
  max-height: 388px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: block;

`
export const StyledSpan = styled.span`
  color: #1F2626;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
`
const StyledProjectText = styled(StyledText)`
  color: #BDEBEA;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.64px;
  font-weight: 400;
  padding: 19px 9px 32px 26px;
  @media ${MyTheme.media.mobile} {
    padding: 16px 7px 19px 18px;
  }

`

const StyledPhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover a {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%)
  }

  &:hover img {
    transform: skew(30deg);
    opacity: 0.5;
    transition: .2s;
  }
  
  @media ${MyTheme.media.tablet} {
    a {
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%)
    }
    img {
      transform: skew(30deg);
      opacity: 0.5;
    }
  }
`
const StyledProjectLink = styled.a`
  position: absolute;
  top: 100%;
  display: inline-flex;
  padding: 12px 20px 13px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #00F5A0 0%, #00F5A0 100%);
  color: ${MyTheme.colors.secondaryText};
  z-index: 1;
  font-weight: 600;

  &:focus-visible {
    outline: none;
    border: 3px solid ${MyTheme.colors.primaryText};
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}

&:hover {
  background-image: unset;
  background-color: ${MyTheme.colors.primaryText};
  color: ${MyTheme.colors.primaryBgc};
  transform: translateY(3px);
}

`

