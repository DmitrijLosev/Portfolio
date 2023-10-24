import React, {useState} from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import {MainContainer} from "../../../components/MainContainer";
import {MyTheme} from "../../../components/styles/MyTheme.styles";
import {StyledBtn} from "../../../components/Button";

export const Projects = () => {

    const [showAllProjects, setShowAll]=useState<boolean>(false)
    const showAllProject=()=>{
        setShowAll(true)
    }
    const hideAllProject=()=>{
        setShowAll(false)
    }

    return (
        <StyledProjectsSection id="Projects">
            <MainContainer>
                <FlexWrapper id="allprojects" direction="column">
            <StyledSectionTitle>Projects</StyledSectionTitle>
            <FlexWrapper id="cardsWrapper" wrap="wrap" justify="center">
                <Project showAllProjects={showAllProjects}/>
            </FlexWrapper>
            {!showAllProjects ? <StyledBtn onClick={showAllProject}>SEE ALL PROJECTS</StyledBtn> :
                <StyledBtn onClick={hideAllProject}>HIDE ALL PROJECTS</StyledBtn>}
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

