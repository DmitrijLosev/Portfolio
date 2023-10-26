import React from 'react';
import styled from "styled-components";
import {StyledNavLink} from "../StyledNavLink";



export const Menu:React.FC<{menuItems:string[]}> = (props) => {



    return (
        <StyledMenu role="navigation">
            <ul id="linkMenu" role="menu" aria-label="menu">
                {props.menuItems.map((item, index) => (
                    <li role={"menuitem"} key={index}>
                        {item === "Contact Me" ? (
                            <StyledNavLink role="link" aria-label="mail me" to="/contact" id={item}>
                                {item}
                            </StyledNavLink>
                        ) : (
                            <StyledNavLink role="link" aria-label={item}
                                to={`/#${item}`}
                                id={`${item}-${index}`}
                                type={index === 3 ? "colored" : undefined}
                            >
                                {item}
                            </StyledNavLink>
                        )}
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu=styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;


    li:nth-of-type(-n+3) {
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