import React, { useState} from 'react';
import styled, {css} from "styled-components";
import {StyledNavLink} from "../StyledNavLink";
import {MyTheme} from "../styles/MyTheme.styles";





export const MobileMenu: React.FC<{ menuItems: string[]}> = (props) => {


    const [isOpen,changeIsOpen]=useState(false)


    const setChangeIsOpen= ()=>{
        changeIsOpen(!isOpen)
    }

    return (
        <StyledMobileMenu role="navigation">
            <BurgerButton onClick={setChangeIsOpen} isOpen={isOpen}><span></span></BurgerButton>
            <MobileMenuPopUp isOpen={isOpen}>
                <ul id="linkMenu" role="menu" aria-label="menu">
                    {props.menuItems.map((item, index) => (
                        <li role={"menuitem"} key={index}>
                                <StyledNavLink onClick={setChangeIsOpen} role="link" aria-label={item}
                                               to={`/#${item}`}
                                               id={`${item}-${index}`}
                                >
                                    {item}
                                </StyledNavLink>
                        </li>
                    ))}
                </ul>
            </MobileMenuPopUp>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  

  @media ${MyTheme.media.tablet} {
    display: block;
  }


  li {
    position: relative;
    outline: 2px solid transparent;

    &:hover {
      &::before {
        content: "";
        display: inline-block;
        background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        border-radius: 4px;
        position: absolute;
        background-size: cover;
        height: 11px;
        width: 100%;
        bottom: -12px;
      }
    }
  }

}
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  right: 25px;
  top: 50px;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  z-index: 99999;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    box-shadow: -0 0 5px 2px ${MyTheme.colors.thirdBgc} inset;
  `}
  span {
    display: block;
    width: 40px;
    height: 3px;
    left: 10px;
    bottom: 30px;
    background-color: ${MyTheme.colors.primaryText};
    position: absolute;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: ${MyTheme.colors.thirdBgc};
    `}
    &::before {
      content: "";
      display: inline-block;
      width: 40px;
      height: 3px;
      background-color: ${MyTheme.colors.primaryText};
      position: absolute;
      transform: translate(-20px, -15px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        background-color: ${MyTheme.colors.thirdBgc};
      `}
    }

    &::after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 3px;
      background-color: ${MyTheme.colors.primaryText};
      position: absolute;
      transform: translateY(15px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        background-color: ${MyTheme.colors.thirdBgc};
      `}
    }

  }


`
const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
padding-top: 100px;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
` }
    
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      list-style: none;
    }

    position: fixed;
    background-color: rgba(34, 37, 37, 0.9);
    top: -100px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
  

`