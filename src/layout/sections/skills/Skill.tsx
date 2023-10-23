import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../components/icon/Icon";
import {MyTheme} from "../../../components/styles/MyTheme.styles";


type SkillPropsType = {
    iconId: string;
    skillItem: string;
    skillProgress: number,
    viewBox?: string;
}
export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <StyledSkillBox>
            <Icon iconId={props.iconId} width="120" height="120" viewBox={props.viewBox || "0 0 120 120"}/>
            <StyledSkillTitle>{props.skillItem}</StyledSkillTitle>
            <StyledLabel htmlFor={props.skillItem} hidden>{props.skillItem}</StyledLabel>
            <StyledSkillProgress id={props.skillItem} max={100}
                              value={props.skillProgress}>Progress</StyledSkillProgress>
        </StyledSkillBox>
    );
};


const StyledSkillTitle = styled.h3`
  color: ${MyTheme.colors.primaryText}
  font-family: Montserrat,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`

const StyledSkillProgress = styled.progress`

`
const StyledSkillBox = styled.div`
  min-width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
`
const StyledLabel= styled.label`
    
`