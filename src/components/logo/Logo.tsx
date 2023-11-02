import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Logo_Styles";


export const Logo:React.FC = () => {
    return (
        <S.StyledLogoNavLink smooth={true} role="link" aria-label="main section" to="/#">
            <FlexWrapper justify={'center'} align={'center'}>
            <Icon iconId="logo" />
            <span>Home</span>
            </FlexWrapper>
        </S.StyledLogoNavLink>
    );
};

