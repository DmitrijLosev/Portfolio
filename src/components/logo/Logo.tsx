import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {StyledNavLink} from "../StyledNavLink";


export const Logo = () => {
    return (
        <StyledLogoNavLink role="link" aria-label="main section" to="/#">
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
        transition: .2s;
      }

      svg{
        filter:drop-shadow(5px 5px 5px #00F5A0);
      }
      span {
        text-shadow: 5px 5px 5px #00F5A0;
      }
    `