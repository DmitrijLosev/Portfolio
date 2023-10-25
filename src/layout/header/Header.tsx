import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {MainContainer} from "../../components/MainContainer";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MyTheme} from "../../components/styles/MyTheme.styles";

const menuItems = ["About me", "Skills", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <MainContainer>
                <FlexWrapper justify="space-between" align="center" wrap="wrap">
                    <Logo/>
                    <Menu menuItems={menuItems}/>
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
