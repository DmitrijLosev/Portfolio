import React from 'react';
import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";

export const Projects = () => {
    return (
        <StyledProjectsSection id="projects">
            <StyledSectionTitle>Projects</StyledSectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Project/>
            </FlexWrapper>
            <StyledBtn>SEE ALL PROJECTS</StyledBtn>
        </StyledProjectsSection>
    );
};

const StyledProjectsSection = styled.section`
  background-color: #041501;
min-height: 100vh;
`

const StyledBtn = styled.button``