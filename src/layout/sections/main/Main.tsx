import React from 'react';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {StyledText} from "../../../components/StyledText";
import code from "../../../assets/images/code.svg"
import laptop from "../../../assets/images/laptop.svg"
import {MainContainer} from "../../../components/MainContainer";
import {StyledNavLink} from "../../../components/StyledNavLink";
import styled from "styled-components";
import fone from "../../../assets/images/fone.svg";
import codes from "../../../assets/images/codes.svg"
import {MyTheme} from "../../../components/styles/MyTheme.styles";
import {font} from "../../../components/styles/Commons";


export const Main = () => {
    return (
        <StyledMain role="region" aria-label="mainInfo" id="Home">
            <MainContainer id="container">
                <FlexWrapper id="MainSectionFlexWrapper" direction="row" justify="space-between" align="center"
                             wrap="wrap-reverse">
                    <ArrowLink role="link" aria-label="nextSection" id="arrowScroll" href="/Portfolio#About me">
                        <Icon iconId="arrowScroll" width="32"
                              height="32"
                              viewBox="0 0 32 32"/></ArrowLink>
                    <FlexWrapper id="textFlexWrapper" direction="column" justify="center" align="start" wrap="wrap">
                        <MainTittle role="heading" aria-level={1}>WEB DEVELOPER</MainTittle>
                        <Name role="heading" aria-level={2}>Erica Font</Name>
                        <StyledMainText role="paragraph" aria-label="MainInformation">Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat
                            sunt.</StyledMainText>
                        <StyledNavLink role="link" aria-label="MailMe" to="/contact" type="colored">Contact
                            me</StyledNavLink>
                    </FlexWrapper>
                    <PseudoDiv>
                        <StyledPhoto role="img" aria-label="mainPhoto" src={photo} alt="Main photo here"/>
                        <StyledCodesPhoto role="img" aria-hidden="true" src={codes} alt={"Codes photo for main Photo"}/>
                        <StyledCodesPhoto role="img" aria-hidden="true" src={codes} alt={"Codes photo for main Photo"}/>
                        <StyledFone role="img" aria-hidden="true" src={fone} alt={"Fone for photo here"}/>
                    </PseudoDiv>
                </FlexWrapper>
            </MainContainer>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  padding: 260px 0 132px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${MyTheme.media.mobile} {
    padding: 129px 0 0 0;
  }

  ${StyledNavLink} {
    @media not ${MyTheme.media.mobile} {
      margin: 20px 0 0 0;
    }
  }

  ${FlexWrapper}[id="MainSectionFlexWrapper"] {
    row-gap: 81px;
    @media screen and (max-width: 1059px) {
      justify-content: center;
    }
    @media ${MyTheme.media.mobile} {
      padding: 0 17px 0 17px;
    }
  }

  ${FlexWrapper}[id="textFlexWrapper"] {
    position: relative;
    max-width: 514px;
    width: 100%;
    gap: 10px;
    @media ${MyTheme.media.mobile} {
      align-items: center;
      gap: 13px;
    }
  }

`
const ArrowLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%);
  z-index:1;

  @media ${MyTheme.media.mobile} {
    display: none;
  }


  &:hover svg {
    transform: scale(2) translateY(-10px);
    stroke: ${MyTheme.colors.thirdBgc};
    transition: .2s;
  }
`

const StyledPhoto = styled.img`
  max-width: 461px;
  width: 100%;
  height: 332px;
  object-fit: cover;
  
  object-position: center;
  display: block;

  @media ${MyTheme.media.mobile} {
    width: 300px;
    height: 220px;
   
  }
`

export const MainTittle = styled.h1`
  padding-left:6px;
  ${font({family: "Tinos, sans-serif", color: "#D7E5EC", Fmax: 20, Fmin: 16})};
  
`
const Name = styled.h2`
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  text-shadow: 3px 3px 10px aqua;
  ${font({weight: 600, color:"transparent" , Fmax: 72, Fmin: 40})} 
  
`
const PseudoDiv = styled.div`
  position: relative;
  overflow: hidden;


  box-shadow: 0 0 5px 5px ${MyTheme.colors.thirdBgc};
  border-radius: 6px;
  align-self: start;


  &::after {
    content: "";
    width: 80px;
    height: 45px;
    background-image: url(${code});
    display: inline-block;
    position: absolute;
    background-size: cover;
    right: 20px;
    bottom: 80px;
    z-index: 3;
    @media ${MyTheme.media.mobile} {
      width: 50px;
      height: 30px;
      bottom: 55px;
      right: 10px;
    }
  }

  &::before {
    content: "";
    width: 140px;
    height: 60px;
    background-image: url(${laptop});
    display: inline-block;
    position: absolute;
    background-size: cover;
    right: 5px;
    bottom: 5px;
    z-index: 3;
    @media ${MyTheme.media.mobile} {
      width: 95px;
      height: 40px;
      bottom: 5px;
      right: 5px;
    }
  }

  img:nth-child(2) {
    top: -30px;
    left: 10px;
    @media ${MyTheme.media.mobile} {
      width: 250px;
      height: 125px;
      top: -30px;
      left: 5px;
    }
  }

  img:nth-child(3) {
    top: -30px;
    left: 325px;
    @media ${MyTheme.media.mobile} {
      width: 250px;
      height: 120px;
      top: -30px;
      left: 215px;
    }
  }


`
const StyledFone = styled.img`
  position: absolute;
  width: 460px;
  height: 330px;
  z-index: 2;
  transform: rotate(30deg) translate(30px, 30px);
  left: 300px;
  bottom: -81px;
  @media ${MyTheme.media.mobile} {
    left: 210px;
    bottom: -145px;
    transform: rotate(45deg) translate(30px, 30px);
  }

`
const StyledCodesPhoto = styled.img`
  position: absolute;
  width: 350px;
  height: 170px;

`
const StyledMainText = styled(StyledText)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.64px;
  @media ${MyTheme.media.mobile} {
    text-align: center;
    padding: 3px 0;
  }
`