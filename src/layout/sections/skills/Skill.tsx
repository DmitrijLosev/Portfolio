import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../components/icon/Icon";


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
            <StyledSkillMeter min={0} max={100} low={20} high={80} optimum={50}
                              value={props.skillProgress}>Progress</StyledSkillMeter>
        </StyledSkillBox>
    );
};


const StyledSkillTitle = styled.h3`
  color: var(--text, #BDEBEA);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`
const StyledSkillMeter = styled.meter`

`
const StyledSkillBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b07777;
  
`