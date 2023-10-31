import styled from "styled-components";
import {MainContainer} from "../../../components/MainContainer";
import {MyTheme} from "../../../components/styles/MyTheme.styles";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../components/styles/Commons";
import {StyledSpan} from "../../../components/StyledSpan";

const SkillSection = styled.section`

  ${MainContainer} {
    padding-right: 40px;
    @media ${MyTheme.media.mobile} {
      padding: 0 25px;
    }
  }

  h2 {
    padding: 130px 0 28px 0;
    width: 100%;
    align-self: flex-end;
    @media ${MyTheme.media.mobile} {
      padding: 130px 0 46px 0;
    }
  }

  ${FlexWrapper}[id="skillwrapper"] {
    row-gap: 60px;
    column-gap: 120px;
    flex-grow: 1;
    max-width: 1080px;
    width: 100%;
    @media ${MyTheme.media.tablet} {
      row-gap: 80px;
      column-gap: 47px;
    }
  }
`
const SkillTitle = styled.h3`
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
const SkillBox = styled.div`
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
export const S={
    SkillSection,
    SkillTitle,
    ProgressBarWrapper,
    ProgressSpan,
    SkillBox,
}