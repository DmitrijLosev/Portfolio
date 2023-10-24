import React from 'react';
import styled from "styled-components";
import ProjectTitlePhoto from "./../../../assets/images/project.webp";
import {StyledText} from "../../../components/StyledText";
import {FlexWrapper} from "../../../components/FlexWrapper";




export const Project: React.FC<{ showAllProjects: boolean }> = (props) => {


    const ProjectsItemsStart = [
        {
            projectId: 1,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "SOCIAL NETWORK",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            projectId: 2,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "PORTFOLIO",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }]

    const ProjectsItems = [
        {
            projectId: 1,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "SOCIAL NETWORK",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            projectId: 2,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "PORTFOLIO",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            projectId: 3,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "NATURAL CARDS",
            projectUsedSkills: ["HTML 5", "CSS"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            projectId: 4,
            projectTitlePhoto: ProjectTitlePhoto,
            projectTitle: "FREECODECAMP PROJECTS",
            projectUsedSkills: ["JAVASCRIPT", "HTML 5", "CSS", "TYPESCRIPT", "REDUX", "STYLED COMPONENTS"],
            projectDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]


    return (<>
            {
                !props.showAllProjects
                    ? ProjectsItemsStart.map((projectItem) => (
                        <StyledProjectBox key={projectItem.projectId}>
                            <FlexWrapper id="projectWrapper" direction="column">
                            <StyledProjectTitlePhoto src={projectItem.projectTitlePhoto} alt=""/>
                            <StyledProjectTitle>{projectItem.projectTitle}</StyledProjectTitle>
                            <FlexWrapper id="skillsSpans">
                            {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                                <StyledSkillSpan  key={index}>{skillItem}</StyledSkillSpan >
                            ))}
                            </FlexWrapper>
                            <StyledProjectText>{projectItem.projectDescription}</StyledProjectText>
                            </FlexWrapper>
                        </StyledProjectBox>
                    ))
                    : ProjectsItems.map((projectItem) => (
                        <StyledProjectBox key={projectItem.projectId}>
                            <FlexWrapper id="projectWrapper" direction="column">
                            <StyledProjectTitlePhoto src={projectItem.projectTitlePhoto} alt=""/>
                            <StyledProjectTitle>{projectItem.projectTitle}</StyledProjectTitle>
                                <FlexWrapper id="skillsSpans" wrap="wrap">
                            {projectItem.projectUsedSkills.map((skillItem: string, index: number) => (
                                <StyledSkillSpan key={index}>{skillItem}</StyledSkillSpan>
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
    width:100%;
  }

  ${FlexWrapper}[id="projectWrapper"] {
    border-radius: 6px;
    background-color: #222525;
  }
`
const StyledProjectTitle = styled.h3`
  color:#D9F2F2;
  font-family: Montserrat,sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 25px;
  max-width: 450px;
`

const StyledProjectTitlePhoto = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom:30px;
`
const StyledSkillSpan = styled.span `
  color: #1F2626;
  text-align: center;
  font-family: Montserrat,sans-serif;
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
  padding:20px 25px 30px 25px
`