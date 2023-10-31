import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Skill_Styles";
import ProgressBar from "react-customizable-progressbar"


type SkillPropsType = {
    iconId: string;
    skillItem: string;
    skillProgress: number,
    viewBox?: string;
}
export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <S.SkillBox>
            <Icon iconId={props.iconId} width="120px" height="120px" viewBox={props.viewBox || "0 0 120 120"}/>
            <S.SkillTitle role="heading" aria-level={3}>{props.skillItem}</S.SkillTitle>
            <S.ProgressBarWrapper role="generic" aria-label="progressbar">
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
                <S.ProgressSpan role="generic" aria-label="progress-value">{props.skillProgress}%</S.ProgressSpan>
            </S.ProgressBarWrapper>
        </S.SkillBox>
    );
};


