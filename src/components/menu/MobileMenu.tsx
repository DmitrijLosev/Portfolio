import React, {useState} from 'react';
import {StyledNavLink} from "../StyledNavLink";
import {S} from './Menu_Styles';


export const MobileMenu: React.FC<{ menuItems: string[] }> = (props) => {

    const [isOpen, changeIsOpen] = useState(false)

    const setChangeIsOpen = () => {
        changeIsOpen(!isOpen)
    }

    return (
        <S.Menu role="navigation">
            <S.BurgerButton onClick={setChangeIsOpen} isOpen={isOpen}><span></span></S.BurgerButton>
            <S.MobileMenuPopUp isOpen={isOpen} onClick={()=>{changeIsOpen(false)}}>
                <ul id="linkMenu" role="menu" aria-label="menu">
                    {props.menuItems.map((item, index) => (
                        <li role={"menuitem"} key={index}>
                            <StyledNavLink smooth={true} onClick={setChangeIsOpen} role="link" aria-label={item}
                                           to={`/#${item}`}
                                           id={`${item}-${index}`}
                            >
                                {item}
                            </StyledNavLink>
                        </li>
                    ))}
                </ul>
            </S.MobileMenuPopUp>
        </S.Menu>
    );
};

