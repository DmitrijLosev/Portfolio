import React from 'react';
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledText} from "../../../components/StyledText";
import styled from "styled-components";
import line from "../../../assets/images/line.svg"
import {MainContainer} from "../../../components/MainContainer";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const AboutMe = () => {
    return (
        <StyledSection id="About me" role="region" aria-label="about me">
            <MainContainer>
                <FlexWrapper direction="column" justify="center" align="start" wrap="wrap">
                <StyledSectionTitle role="heading" aria-level={2}>
                    About me
                </StyledSectionTitle>
                <StyledTextPseudo role="paragraph" aria-label="InformationAboutMe">
                    The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a
                    sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                    chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were
                    placed within this chamber during the Neolithic period, representing at least nine or ten
                    individuals.
                </StyledTextPseudo>
                </FlexWrapper>
            </MainContainer>
        </StyledSection>
    );
};

const StyledSection = styled.section`
  min-height: calc(70vh - 100px);
  
  ${StyledSectionTitle}{
    padding:100px 0 20px 0;
  }

`

const StyledTextPseudo = styled(StyledText)`
  position: relative;
  
  
  &::before {
    content: "";
    width: 5px;
    height: 100%;
    background-image: url(${line});
    display: inline-block;
    position: absolute;
    background-size: cover;
    left: -17px;
  }
  max-width: 845px;
  width: 100%;
  
`