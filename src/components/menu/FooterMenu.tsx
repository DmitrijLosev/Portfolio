import React from 'react';
import {StyledNavLink} from "../StyledNavLink";
import { S } from './Menu_Styles';


export const FooterMenu: React.FC<{ menuItems: string[], fontSize?: string, fontWeight?: string }> = (props) => {


    return (
        <S.FooterMenu role="navigation">
            <ul id="linkMenu" role="menu" aria-label="menu">
                {props.menuItems.map((item, index) => (
                    <li role={"menuitem"} key={index}>
                        {item === "Contact Me" ? (
                            <StyledNavLink smooth={true} role="link" aria-label="mail me" to="/contact" id={item}
                                           fontSize={props.fontSize} fontWeight={props.fontWeight}
                            >
                                {item}
                            </StyledNavLink>
                        ) : (
                            <StyledNavLink smooth={true} role="link" aria-label={item}
                                           to={`/#${item}`}
                                           id={`${item}-${index}`}
                                           fontSize={props.fontSize} fontWeight={props.fontWeight}
                            >
                                {item}
                            </StyledNavLink>
                        )}
                    </li>
                ))}
            </ul>
        </S.FooterMenu>
    );
};

