import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const menuItems=["About me","Skills","Projects","Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
  background-color: forestgreen;
  display:flex;
  justify-content:space-between;
  position:fixed;
  width:100%;
  height:100px;
 
`
