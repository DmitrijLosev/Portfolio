import React from 'react';
import {Skill} from "./Skill";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Skill_Styles";
import {MainContainer} from "../../../components/MainContainer";


type SkillItemType = { iconId: string, skillItem: string, skillProgress: number, viewBox?: string }

const SkillItemsProps: SkillItemType[] = [
    {iconId: "reactjsSkill", skillItem: "REACT JS", skillProgress: 45},
    {iconId: "htmlSkill", skillItem: "HTML", skillProgress: 85},
    {iconId: "cssSkill", skillItem: "CSS", skillProgress: 55},
    {iconId: "githubSkill", skillItem: "GITHUB", skillProgress: 75, viewBox: "0 0 88 88"},
    {iconId: "reduxSkill", skillItem: "REDUX", skillProgress: 75},
    {iconId: "jsSkill", skillItem: "JAVASCRIPT", skillProgress: 45},
    {iconId: "stcSkill", skillItem: "STYLED COMPONENTS", skillProgress: 35},
    {iconId: "tsSkill", skillItem: "TYPESCRIPT", skillProgress: 55}
]
export const Skills:React.FC = () => {
    return (
        <S.SkillSection role="region" aria-label="skills" id="Skills">
            <MainContainer>
                <StyledSectionTitle role="heading" aria-level={2}>Skills</StyledSectionTitle>
                <FlexWrapper id="skillwrapper" wrap="wrap" justify="center">
                    {SkillItemsProps.map((itemProps) => (
                        <Skill key={itemProps.iconId} iconId={itemProps.iconId} skillItem={itemProps.skillItem}
                               skillProgress={itemProps.skillProgress}/>
                    ))}
                </FlexWrapper>
            </MainContainer>
        </S.SkillSection>
    );
};

