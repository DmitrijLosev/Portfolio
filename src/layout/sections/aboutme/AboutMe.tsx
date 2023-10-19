import React from 'react';
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {StyledText} from "../../../components/StyledText";
import styled from "styled-components";


export const AboutMe = () => {
    return (
        <StyledSection>
            <StyledSectionTitle>
                About me
            </StyledSectionTitle>
            <StyledText>
                The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a
                sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber
                built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed
                within this chamber during the Neolithic period, representing at least nine or ten individuals.
            </StyledText>
        </StyledSection>
    );
};

const StyledSection=styled.section`
  background-color: #42c511;
`
