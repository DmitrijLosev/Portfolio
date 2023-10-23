import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {StyledNavLink} from "../StyledNavLink";

export const Logo = () => {
    return (
        <StyledLogoNavLink to="/#">
            <FlexWrapper justify={'center'} align={'center'}>
            <Icon iconId="logo" />
            <span>Home</span>
            </FlexWrapper>
        </StyledLogoNavLink>
    );
};

    const StyledLogoNavLink=styled(StyledNavLink)`
    ${FlexWrapper} {
      gap:10px
    }
      &:hover {
        transform:scale(1.2);
      }
     
    `