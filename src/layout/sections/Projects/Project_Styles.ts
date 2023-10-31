import styled from "styled-components";
import {MainContainer} from "../../../components/MainContainer";
import {MyTheme} from "../../../components/styles/MyTheme.styles";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledText} from "../../../components/StyledText";

//Projects

const ProjectsSection = styled.section`

  ${MainContainer} {
    padding-right: 50px;
    @media ${MyTheme.media.mobile} {
      padding:0 25px 0 25px;
    }
  }
  
  h2 {
    padding: 130px 0 0 0;
    width: 100%;
    align-self: flex-end;
    @media ${MyTheme.media.mobile} {
      padding:144px 0 0 0;
    }
  }

  ${FlexWrapper}[id="cardsWrapper"] {
    height: auto;
    column-gap: 27px;
    row-gap: 28px;
    padding: 32px 0 37px 0;
    @media ${MyTheme.media.mobile} {
      row-gap: 16px;
    }
  }

  button {
    margin: 0 auto;
  }
`
//Project

const ProjectBox = styled.div`
  width: 363px;
  flex-grow: 1;
  
  ${FlexWrapper}[id="skillsSpans"] {
    height: auto;
    gap: 12px;
    padding: 11px 10px 0 26px;
    @media ${MyTheme.media.mobile} {
      padding: 11px 7px 0 18px;
    }
  }

  ${FlexWrapper}[id="projectWrapper"] {
    border-radius: 6px;
    background-color: ${MyTheme.colors.secondaryBgc};
  }

  @media ${MyTheme.media.desktop} {
    max-width: 522px;
  }
`
const ProjectTitle = styled.h3`
  color: #D9F2F2;
  font-size: 20px;
  font-weight: 600;
  padding: 29px 0 0 26px;
  max-width: 450px;
  @media ${MyTheme.media.mobile} {
    padding: 16px 0 0 18px;
  }

`

const ProjectTitlePhoto = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 100 / 81;
  max-height: 388px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: block;

`

const ProjectText = styled(StyledText)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.64px;
  font-weight: 400;
  padding: 19px 9px 32px 26px;
  @media ${MyTheme.media.mobile} {
    padding: 16px 7px 19px 18px;
  }

`

const PhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover a {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%)
  }

  &:hover img {
    transform: skew(30deg);
    opacity: 0.5;
    transition: .2s;
  }
  
  @media ${MyTheme.media.tablet} {
    a {
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%)
    }
    img {
      transform: skew(30deg);
      opacity: 0.5;
    }
  }
`
const ProjectLink = styled.a`
  position: absolute;
  top: 100%;
  display: inline-flex;
  padding: 12px 20px 13px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #00F5A0 0%, #00F5A0 100%);
  color: ${MyTheme.colors.secondaryText};
  z-index: 1;
  font-weight: 600;

  &:focus-visible {
    outline: none;
    border: 3px solid ${MyTheme.colors.primaryText};
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}

&:hover {
  background-image: unset;
  background-color: ${MyTheme.colors.primaryText};
  color: ${MyTheme.colors.primaryBgc};
  transform: translateY(3px);
}

`


export const S={
    ProjectsSection,
    ProjectBox,
    ProjectTitle,
    ProjectTitlePhoto,
    ProjectText,
    PhotoWrapper,
    ProjectLink,
}