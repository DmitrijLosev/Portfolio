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
                            <StyledProjectLink href={projectItem.linkOnGitHub} target="_blank">Link to GitHub</StyledProjectLink>
                            <StyledProjectTitlePhoto src={projectItem.projectTitlePhoto} alt=""/>
                        </StyledPhotoWrapper>
                        <StyledProjectTitle>{projectItem.projectTitle}</StyledProjectTitle>
                        <FlexWrapper id="skillsSpans" wrap="wrap">
                            {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                                <StyledSpan key={index}>{skillItem}</StyledSpan>
                            ))}
                        </FlexWrapper>
                        <StyledProjectText>{projectItem.projectDescription}</StyledProjectText>
                    </FlexWrapper>
                </StyledProjectBox>
            ))
            : ProjectsItems.map((projectItem) => (
                <StyledProjectBox key={projectItem.projectId}>
                    <FlexWrapper id="projectWrapper" direction="column">
                    <StyledPhotoWrapper>
                        <StyledProjectLink href={projectItem.linkOnGitHub} target="_blank">Link to GitHub</StyledProjectLink>
                    <StyledProjectTitlePhoto src={projectItem.projectTitlePhoto} alt=""/>
                </StyledPhotoWrapper>
        <StyledProjectTitle>{projectItem.projectTitle}</StyledProjectTitle>
    <FlexWrapper id="skillsSpans" wrap="wrap">
        {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
            <StyledSpan key={index}>{skillItem}</StyledSpan>
        ))}
    </FlexWrapper>
    <StyledProjectText>{projectItem.projectDescription}</StyledProjectText>
</FlexWrapper>
</StyledProjectBox>
))
}
</>
)

}

const StyledProjectBox = styled.div`
  max-width: 500px;
  width: 100%;

  ${FlexWrapper}[id="skillsSpans"] {
    height: auto;
    gap: 12px;
    max-width: 475px;
    padding: 10px 0 0 25px;
  }

  ${FlexWrapper}[id="projectWrapper"] {
    border-radius: 6px;
    background-color: #222525;
  }
`
const StyledProjectTitle = styled.h3`
  color: #D9F2F2;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 25px;
  max-width: 450px;
  padding-top: 30px;
`

const StyledProjectTitlePhoto = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  
`
export const StyledSpan = styled.span`
  color: #1F2626;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 10px;
  font-style: normal;
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
  max-width: 500px;
  padding: 20px 25px 30px 25px
`

const StyledPhotoWrapper=styled.div`
position:relative;
  cursor:pointer;
  overflow:hidden;
  &:hover a {
    top:50%;
    right:50%;
    transform:translate(50%,-50%)
  }
&:hover img{
  transform: skew(30deg);
  opacity:0.5 ;
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

  &:hover {
    background-image: unset;
    background-color: ${MyTheme.colors.primaryText};
    color: ${MyTheme.colors.primaryBgc};
    transform: translateY(3px);
  }

`

