import React from 'react';
import {Skill} from "./Skill";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {MainContainer} from "../../../components/MainContainer";

export const Skills = () => {
    return (
        <StyledSkillSection id="Skills">
            <MainContainer>
                <FlexWrapper id="skillwrapper" wrap="wrap" justify="center">
                <StyledSectionTitle>Skills</StyledSectionTitle>
                    <Skill iconId="htmlSkill" skillItem="HTML" skillProgress={85}/>
                    <Skill iconId="cssSkill" skillItem="CSS" skillProgress={55}/>
                    <Skill iconId="jsSkill" skillItem="JAVASCRIPT" skillProgress={45}/>
                    <Skill iconId="reactjsSkill" skillItem="REACT JS" skillProgress={45}/>
                    <Skill iconId="tsSkill" skillItem="TYPESCRIPT" skillProgress={55}/>
                    <Skill iconId="reduxSkill" skillItem="REDUX" skillProgress={75}/>
                    <Skill iconId="stcSkill" skillItem="STYLED COMPONENTS" skillProgress={35}/>
                    <Skill iconId="githubSkill" skillItem="GITHUB" skillProgress={75} viewBox="0 0 88 88"/>
                </FlexWrapper>
            </MainContainer>
        </StyledSkillSection>
    );
};

const StyledSkillSection = styled.section`
  min-height: 100vh;

  h2 {
    padding: 100px 0 0 0;
    max-width: 1080px;
    width: 100%;
    align-self:flex-end;
    
  }
  div[id="skillwrapper"] div {
    flex-grow: 0;
  }
  ${FlexWrapper}[id="skillwrapper"]{
    row-gap: 30px;
  }
`