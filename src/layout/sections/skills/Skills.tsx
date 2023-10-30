import React from 'react';
import {Skill} from "./Skill";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {MainContainer} from "../../../components/MainContainer";
import {MyTheme} from "../../../components/styles/MyTheme.styles";

export const Skills = () => {
    return (
        <StyledSkillSection role="region" aria-label="skills" id="Skills">
            <MainContainer>
                <StyledSectionTitle role="heading" aria-level={2}>Skills</StyledSectionTitle>
                <FlexWrapper id="skillwrapper" wrap="wrap" justify="center">
                    <Skill iconId="reactjsSkill" skillItem="REACT JS" skillProgress={45}/>
                    <Skill iconId="htmlSkill" skillItem="HTML" skillProgress={85}/>
                    <Skill iconId="cssSkill" skillItem="CSS" skillProgress={55}/>
                    <Skill iconId="githubSkill" skillItem="GITHUB" skillProgress={75} viewBox="0 0 88 88"/>
                    <Skill iconId="reduxSkill" skillItem="REDUX" skillProgress={75}/>
                    <Skill iconId="jsSkill" skillItem="JAVASCRIPT" skillProgress={45}/>
                    <Skill iconId="stcSkill" skillItem="STYLED COMPONENTS" skillProgress={35}/>
                    <Skill iconId="tsSkill" skillItem="TYPESCRIPT" skillProgress={55}/>
                </FlexWrapper>
            </MainContainer>
        </StyledSkillSection>
    );
};

const StyledSkillSection = styled.section`

  ${MainContainer} {
    padding-right: 40px;
    @media ${MyTheme.media.mobile} {
      padding:0 25px 0 25px;
    }
  }
  h2 {
    padding: 130px 0 28px 0;
    width: 100%;
    align-self:flex-end;
    @media ${MyTheme.media.mobile} {
      padding: 85px 0 46px 0;
    }
  }
  
  ${FlexWrapper}[id="skillwrapper"]{
    row-gap: 60px;
    column-gap: 120px;
   flex-grow: 1;
    max-width: 1080px;
    width:100%;
    @media ${MyTheme.media.tablet} {
      row-gap: 80px;
      column-gap: 47px;
    }
  }
`