import React, {useState} from 'react';
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import {MainContainer} from "../../../components/MainContainer";
import {StyledBtn} from "../../../components/StyledButton";
import {S} from "./Project_Styles";


export const Projects:React.FC = () => {

    const [showAllProjects, setShowAll]=useState<boolean>(false)
    const showAllProject=()=>{
        setShowAll(true)
    }
    const hideAllProject=()=>{
        setShowAll(false)
    }

    return (
        <S.ProjectsSection id="Projects" role="region" aria-label="projects">
            <MainContainer>
            <StyledSectionTitle role="heading" aria-level={2}>Projects</StyledSectionTitle>
            <FlexWrapper id="cardsWrapper"  justify="space-between" align="flex-start" wrap="wrap" >
                <Project showAllProjects={showAllProjects}/>
            </FlexWrapper>
            {!showAllProjects ? <StyledBtn role="button" aria-label="showAllProjects" onClick={showAllProject}>SEE ALL PROJECTS</StyledBtn> :
                <StyledBtn role="button" aria-label="hideAllProjects" onClick={hideAllProject}>HIDE ALL PROJECTS</StyledBtn>}
            </MainContainer>
        </S.ProjectsSection>
    );
};



