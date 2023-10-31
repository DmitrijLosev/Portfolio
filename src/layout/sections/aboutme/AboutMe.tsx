import React from 'react';
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {S} from "./AboutMe_Styles";
import {MainContainer} from "../../../components/MainContainer";



export const AboutMe:React.FC = () => {
    return (
        <S.Section id="About me" role="region" aria-label="about me">
            <MainContainer>
                <StyledSectionTitle role="heading" aria-level={2}>
                    About me
                </StyledSectionTitle>
                <S.TextPseudo role="paragraph" aria-label="InformationAboutMe">
                    The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a
                    sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                    chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were
                    placed within this chamber during the Neolithic period, representing at least nine or ten
                    individuals.
                </S.TextPseudo>
            </MainContainer>
        </S.Section>
    );
};

