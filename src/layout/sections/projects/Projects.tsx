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
                <FlexWrapper id="allprojects" direction="column">
            <StyledSectionTitle role="heading" aria-level={2}>Projects</StyledSectionTitle>
            <FlexWrapper id="cardsWrapper" wrap="wrap" justify="center">
                <Project showAllProjects={showAllProjects}/>
            </FlexWrapper>
            {!showAllProjects ? <StyledBtn role="button" aria-label="showAllProjects" onClick={showAllProject}>SEE ALL PROJECTS</StyledBtn> :
                <StyledBtn role="button" aria-label="hideAllProjects" onClick={hideAllProject}>HIDE ALL PROJECTS</StyledBtn>}
                </FlexWrapper>
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
    align-self:flex-end;
  }
  ${FlexWrapper}[id="allprojects"]{
    gap:30px;
  }
  ${FlexWrapper}[id="cardsWrapper"]{
    column-gap: 30px;
    row-gap: 30px;
    
  }
`

