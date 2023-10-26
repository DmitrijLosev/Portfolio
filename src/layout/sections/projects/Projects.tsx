import React, {useState} from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import {MainContainer} from "../../../components/MainContainer";
import {StyledBtn} from "../../../components/StyledButton";

export const Projects = () => {

    const [showAllProjects, setShowAll]=useState<boolean>(false)
    const showAllProject=()=>{
        setShowAll(true)
    }
    const hideAllProject=()=>{
        setShowAll(false)
    }

    return (
        <StyledProjectsSection id="Projects" role="region" aria-label="projects">
            <MainContainer>
            <StyledSectionTitle role="heading" aria-level={2}>Projects</StyledSectionTitle>
            <FlexWrapper id="cardsWrapper" wrap="wrap" justify="center" align="start">
                <Project showAllProjects={showAllProjects}/>
            </FlexWrapper>
            {!showAllProjects ? <StyledBtn role="button" aria-label="showAllProjects" onClick={showAllProject}>SEE ALL PROJECTS</StyledBtn> :
                <StyledBtn role="button" aria-label="hideAllProjects" onClick={hideAllProject}>HIDE ALL PROJECTS</StyledBtn>}
            </MainContainer>
        </StyledProjectsSection>
    );
};

const StyledProjectsSection = styled.section`
  min-height: 100vh;

  h2 {
    padding: 100px 0 0 0;
    max-width: 1080px;
    width: 100%;
    align-self: flex-end;
  }

  ${FlexWrapper}[id="cardsWrapper"] {
    column-gap: 28px;
    row-gap: 28px;
    padding: 32px 0 37px 0;
  }

  button {
    margin: 0 auto;
  }
`

