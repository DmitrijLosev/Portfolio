import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {StyledText} from "../../../components/StyledText";
import {NavLink} from "react-router-dom";
import {MyTheme} from "../../../components/styles/MyTheme.styles";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify="space-around" align="center">
                <div>
                    <MainTittle>WEB DEVELOPER</MainTittle>
                    <Name>Dzmitry Loseu</Name>
                    <StyledText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt.</StyledText>
                    <NavLink to="/contact">Contact me</NavLink>
                </div>
                <a id="arrowScroll" href="#"><Icon iconId="arrowScroll" width="32" height="32" viewBox="0 0 32 32"/></a>
                <StyledPhoto src={photo} alt="Main photo here"/>
            </FlexWrapper>
        </StyledMain>
    );
};

export const StyledMain = styled.div`
  min-height: 100vh;
  max-width:100vw;
  background-color: ${MyTheme.colors.primary};
  padding-top:100px;
  ${FlexWrapper} a[id="arrowScroll"] {
    align-self:flex-end;
    width:100%;
  
  }
  display:flex;
  
`


const StyledPhoto = styled.img`
  max-width: 500px;
  width:100%;
  object-fit: cover;
`
export const MainTittle = styled.h1`

`
const Name = styled.h2`

`