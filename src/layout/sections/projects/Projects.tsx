import React, {useState} from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import {MainContainer} from "../../../components/MainContainer";
import {StyledBtn} from "../../../components/StyledButton";
import {MyTheme} from "../../../components/styles/MyTheme.styles";

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
            <FlexWrapper id="cardsWrapper"  justify="space-between" align="flex-start" wrap="wrap" >
                <Project showAllProjects={showAllProjects}/>
            </FlexWrapper>
            {!showAllProjects ? <StyledBtn role="button" aria-label="showAllProjects" onClick={showAllProject}>SEE ALL PROJECTS</StyledBtn> :
                <StyledBtn role="button" aria-label="hideAllProjects" onClick={hideAllProject}>HIDE ALL PROJECTS</StyledBtn>}
            </MainContainer>
        </StyledProjectsSection>
    );
};

const StyledProjectsSection = styled.section`

  ${MainContainer} {
    padding-right: 50px;
    @media ${MyTheme.media.mobile} {
      padding:0 25px 0 25px;
    }
  }
  
  h2 {
    padding: 130px 0 0 0;
    width: 100%;
    align-self: flex-end;
    @media ${MyTheme.media.mobile} {
      padding:144px 0 0 0;
    }
  }

  ${FlexWrapper}[id="cardsWrapper"] {
    height: auto;
    column-gap: 27px;
    row-gap: 28px;
    padding: 32px 0 37px 0;
    @media ${MyTheme.media.mobile} {
      row-gap: 16px;
    }
  }

  button {
    margin: 0 auto;
  }
`

