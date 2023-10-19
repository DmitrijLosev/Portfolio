import React from 'react';
import {Skill} from "./Skill";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Skills = () => {
    return (
        <StyledSkillSection>
            <StyledSectionTitle>Skills</StyledSectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Skill iconId="htmlSkill" skillItem="HTML" skillProgress={85}/>
                <Skill iconId="cssSkill" skillItem="CSS" skillProgress={55}/>
                <Skill iconId="jsSkill" skillItem="JAVASCRIPT" skillProgress={45}/>
                <Skill iconId="reactjsSkill" skillItem="REACT JS" skillProgress={45}/>
                <Skill iconId="tsSkill" skillItem="TYPESCRIPT" skillProgress={55}/>
                <Skill iconId="reduxSkill" skillItem="REDUX" skillProgress={75}/>
                <Skill iconId="stcSkill" skillItem="STYLED COMPONENTS" skillProgress={35}/>
                <Skill iconId="githubSkill" skillItem="GITHUB" skillProgress={75} viewBox="0 0 88 88"/>
            </FlexWrapper>
        </StyledSkillSection>
    );
};

const StyledSkillSection=styled.section`
background-color: #041F31;
`