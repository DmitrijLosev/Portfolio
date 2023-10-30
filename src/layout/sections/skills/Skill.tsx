import React from 'react';
import styled from 'styled-components';
import {Icon} from "../../../components/icon/Icon";
import {MyTheme} from "../../../components/styles/MyTheme.styles";
import ProgressBar from "react-customizable-progressbar"
import {StyledSpan} from "../projects/Project";
import {font} from "../../../components/styles/Commons";

type SkillPropsType = {
    iconId: string;
    skillItem: string;
    skillProgress: number,
    viewBox?: string;
}
export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <StyledSkillBox>
            <Icon iconId={props.iconId} width="120px" height="120px" viewBox={props.viewBox || "0 0 120 120"}/>
            <StyledSkillTitle role="heading" aria-level={3}>{props.skillItem}</StyledSkillTitle>
            <ProgressBarWrapper role="generic" aria-label="progressbar">
                <ProgressBar
                    radius={40}
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
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  ${font({Fmin:12,Fmax:16 })}
`
const ProgressBarWrapper=styled.div`
position:relative;
  @media ${MyTheme.media.tablet} {
    width: 90px;
    height: 90px;
  }
  
`
const ProgressSpan = styled(StyledSpan)`
  font-weight: 600;
  font-size: 1.2em;
  position: absolute;
  bottom: 50px;
  right: 18px;
  background-image: none;
  color: ${MyTheme.colors.primaryText};
  text-shadow: 3px 3px 5px ${MyTheme.colors.thirdBgc};
  @media ${MyTheme.media.tablet} {
    bottom: 30px;
    right: 7px;
    font-size: 1em;
  }
`
const StyledSkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 90px;
  max-width: 120px;
  flex-grow: 1;

  @media ${MyTheme.media.tablet} {
    gap:15px;
  }
  
  svg {
    filter:drop-shadow(5px 5px 5px ${MyTheme.colors.thirdBgc});
    @media ${MyTheme.media.tablet} {
      width: 90px;
      height: 90px;
    }
  }
  
`