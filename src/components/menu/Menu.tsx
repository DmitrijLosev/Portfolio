import React from 'react';
import styled from "styled-components";
import {StyledNavLink} from "../StyledNavLink";



export const Menu:React.FC<{menuItems:string[]}> = (props) => {



    return (
        <StyledMenu>
            <ul id="linkMenu">
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        {item === "Contact Me" ? (
                            <StyledNavLink to="/contact" id={item}>
                                {item}
                            </StyledNavLink>
                        ) : (
                            <StyledNavLink
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
      &:active, &:hover {
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