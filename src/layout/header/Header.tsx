import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "../../components/menu/HeaderMenu";
import {MainContainer} from "../../components/MainContainer";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "../../components/menu/MobileMenu";
import {S} from "./Header_Styles"

const menuItems = ["About me", "Skills", "Projects", "Contact"]
const menuPopUpItems=["Home",...menuItems]
export const Header:React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header role="banner">
            <MainContainer>
                <FlexWrapper justify="space-between" align="center" wrap="wrap">
                    <Logo/>
                    {width > breakpoint ? <HeaderMenu menuItems={menuItems}/>
                        : <MobileMenu menuItems={menuPopUpItems}/>}
                </FlexWrapper>
            </MainContainer>
        </S.Header>

    );
};


