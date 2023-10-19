import React from 'react';
import styled from "styled-components";

export const Menu:React.FC<{menuItems:string[]}> = (props) => {



    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <a href="">{item}</a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu=styled.nav`
ul {
  display:flex;
  gap:30px;
  list-style: none;
}
`