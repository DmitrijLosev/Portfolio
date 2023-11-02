import React from 'react';
import {StyledNavLink} from "../StyledNavLink";
import { S } from './Menu_Styles';


export const HeaderMenu: React.FC<{ menuItems: string[]}> = (props) => {


    return (
        <S.HeaderMenu role="navigation">
            <ul id="linkMenu" role="menu" aria-label="menu">
                {props.menuItems.map((item, index) => (
                    <li role={"menuitem"} key={index}>
                            <StyledNavLink smooth={true}  role="link" aria-label={item}
                                           to={`/#${item}`}
                                           id={`${item}-${index}`}
                                           type={index === 3 ? "colored" : undefined}
                            >
                                {item}
                            </StyledNavLink>
                    </li>
                ))}
            </ul>
        </S.HeaderMenu>
    );
};

