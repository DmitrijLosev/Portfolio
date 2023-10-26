import styled, {css} from "styled-components";
import {HashLink as NavLink} from "react-router-hash-link";
import {MyTheme} from "./styles/MyTheme.styles";

export const StyledNavLink = styled(NavLink)<{ type?: 'colored' }>`
  color: ${MyTheme.colors.primaryText};
  font-size: 16px;
  font-weight: 500;


  ${props => props.type === "colored" && css<{ type?: 'colored' }>`
    display: inline-flex;
    padding: 12px 20px 13px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    color: ${MyTheme.colors.secondaryText};

    &:hover {
      background-image: unset;
      background-color: ${MyTheme.colors.primaryText};
      color: ${MyTheme.colors.primaryBgc};
      transform: translateY(3px);
    }
  `
  }

`