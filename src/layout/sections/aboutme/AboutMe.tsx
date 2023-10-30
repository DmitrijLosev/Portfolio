import React from 'react';
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledText} from "../../../components/StyledText";
import styled from "styled-components";
import {MainContainer} from "../../../components/MainContainer";
import {MyTheme} from "../../../components/styles/MyTheme.styles";


export const AboutMe = () => {
    return (
        <StyledSection id="About me" role="region" aria-label="about me">
            <MainContainer>
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
            </MainContainer>
        </StyledSection>
    );
};

const StyledSection = styled.section`
  
  ${StyledSectionTitle}{
    padding:263px 0 20px;

    @media ${MyTheme.media.mobile} {
      padding:144px 0 20px;
    }
  }

  ${MainContainer}{
    padding:0 77px;
    @media ${MyTheme.media.mobile} {
      padding:0 47px 0 47px;
    }
  }
`

const StyledTextPseudo = styled(StyledText)`
  position: relative;
  
  
  
  &::before {
    content: "";
    width: 5px;
    height: 100%;
    background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    border-radius: 2px;
    display: inline-block;
    position: absolute;
    background-size: cover;
    left: -17px;
  }
  max-width: 845px;
  width: 100%;
  
`