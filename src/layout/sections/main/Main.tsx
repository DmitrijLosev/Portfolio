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

export const Main = () => {
    return (
        <StyledMain id="Main">
                <MainContainer id="container">
                    <FlexWrapper direction="row-reverse" justify="space-between" align="center" wrap="wrap">
                        <ArrowLink id="arrowScroll" href="/#About me"><Icon iconId="arrowScroll" width="32"
                                                                            height="32"
                                                                            viewBox="0 0 32 32"/></ArrowLink>
                        <PseudoDiv>
                            <StyledPhoto src={photo} alt="Main photo here"/>
                            <StyledCodesPhoto src={codes} alt={"Codes photo for main Photo"}/>
                            <StyledCodesPhoto src={codes} alt={"Codes photo for main Photo"}/>
                            <StyledFone src={fone} alt={"Fone for photo here"}/>
                        </PseudoDiv>
                        <FlexWrapper id="textFlexWrapper" direction="column" justify="center" align="start" wrap="wrap">
                            <MainTittle>WEB DEVELOPER</MainTittle>
                            <Name>Dzmitry Loseu</Name>
                            <StyledText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia consequat duis enim velit mollit. Exercitation veniam consequat
                                sunt.</StyledText>
                            <StyledNavLink to="/contact" type="colored">Contact me</StyledNavLink>
                        </FlexWrapper>
                    </FlexWrapper>
                </MainContainer>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${StyledNavLink} {
    margin: 20px 0 10px 0;
  }

  ${FlexWrapper}[id="textFlexWrapper"] {
    position: relative;
    max-width: 500px;
    width: 100%;
    gap: 10px;
    padding: 30px 0 40px 0;
  }

  h1 {
    padding-left: 10px;
  }
`
const ArrowLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 50%;;

  &:hover svg {
    transform: scale(2) translateY(-10px);
    stroke: #00F5A0;
  }

`

const StyledPhoto = styled.img`
  max-width: 500px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 20px solid;
  border-image: repeating-linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%) 1;
  
`

export const MainTittle = styled.h1`
  color: #D7E5EC;
  font-family: Tinos, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const Name = styled.h2`
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  color: transparent;
  -webkit-background-clip: text;
  font-family: Montserrat, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const PseudoDiv = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 500px;
  


  &::after {
    content: "";
    width: 80px;
    height: 45px;
    background-image: url(${code});
    display: inline-block;
    position: absolute;
    background-size: cover;
    right: 25px;
    bottom: 100px;
    z-index: 3;
  }

  &::before {
    content: "";
    width: 140px;
    height: 60px;
    background-image: url(${laptop});
    display: inline-block;
    position: absolute;
    background-size: cover;
    right: 25px;
    bottom: 30px;
    z-index: 3;
  }

  img:nth-child(2) {
    top: 0;
    left: 35px;
  }
  img:nth-child(3) {
    top: 0;
    left: 360px;
  }
  
  img:last-child{
    left:300px;
    bottom:-81px;
    overflow: hidden;
  }
`
const StyledFone=styled.img`
  position: absolute;
  width: 460px;
  height: 330px;
  z-index:2;
`
const StyledCodesPhoto = styled.img`
  position: absolute;
  width: 350px;
  height: 170px;
`