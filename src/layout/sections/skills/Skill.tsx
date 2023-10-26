import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../components/icon/Icon";
import {MyTheme} from "../../../components/styles/MyTheme.styles";
import ProgressBar from "react-customizable-progressbar"
import {StyledSpan} from "../projects/Project";

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
            <StyledSkillTitle role="heading" aria-level={3}>{props.skillItem}</StyledSkillTitle>
            <ProgressBarWrapper role="generic" aria-label="progressbar">
                <ProgressBar
                    radius={50}
                    progress={props.skillProgress}
                    strokeWidth={15}
                    strokeColor="#00D9F5"
                    strokeLinecap="butt"
                    trackStrokeWidth={3}
                    trackStrokeLinecap="butt"
                    cut={120}
                    rotate={-210}
                > </ProgressBar>
                <ProgressSpan role="generic" aria-label="progress-value">{props.skillProgress}%</ProgressSpan>
            </ProgressBarWrapper>
        </StyledSkillBox>
    );
};


const StyledSkillTitle = styled.h3`
  color: ${MyTheme.colors.primaryText}
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  
`
const ProgressBarWrapper=styled.div`
position:relative;
`
const ProgressSpan = styled(StyledSpan)`
  font-weight: 600;
  font-size: 1.2em;
  position: absolute;
  bottom: 60px;
  right: 30px;
  background-image: none;
  color: ${MyTheme.colors.primaryText};
  text-shadow: 3px 3px 5px #00F5A0;
`
const StyledSkillBox = styled.div`
  min-width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  svg {
    filter:drop-shadow(5px 5px 5px #00F5A0);
  }
`