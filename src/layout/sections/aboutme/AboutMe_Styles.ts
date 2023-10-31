import styled from "styled-components";
import {StyledSectionTitle} from "../../../components/StyledSectionTitle";
import {MyTheme} from "../../../components/styles/MyTheme.styles";
import {MainContainer} from "../../../components/MainContainer";
import {StyledText} from "../../../components/StyledText";

const Section = styled.section`

  ${StyledSectionTitle} {
    padding: 263px 0 20px;

    @media ${MyTheme.media.mobile} {
      padding: 144px 0 20px;
    }
  }

  ${MainContainer} {
    padding: 0 90px;
    @media ${MyTheme.media.mobile} {
      padding: 0 47px;
    }
  }
`

const TextPseudo = styled(StyledText)`
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
export const S = {
    Section,
    TextPseudo
}