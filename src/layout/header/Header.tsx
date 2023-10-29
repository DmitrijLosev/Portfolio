import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "../../components/menu/HeaderMenu";
import {MainContainer} from "../../components/MainContainer";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MyTheme} from "../../components/styles/MyTheme.styles";
import {MobileMenu} from "../../components/menu/MobileMenu";

const menuItems = ["About me", "Skills", "Projects", "Contact"]
const menuPopUpItems=["Home",...menuItems]
export const Header = () => {
    return (
        <StyledHeader role="banner">
            <MainContainer>
                <FlexWrapper justify="space-between" align="center" wrap="wrap">
                    <Logo/>
                    <HeaderMenu menuItems={menuItems}/>
                    <MobileMenu menuItems={menuPopUpItems}/>
                </FlexWrapper>
            </MainContainer>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
  background-color: ${MyTheme.colors.primaryBgc};
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 9999;

`
