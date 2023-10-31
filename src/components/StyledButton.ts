import styled from "styled-components";
import {MyTheme} from "./styles/MyTheme.styles";

export const StyledBtn = styled.button`
  display: flex;
  width: 305px;
  height: 56px;
  padding: 12px 20px 13px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  color:${MyTheme.colors.secondaryText};
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  align-self:center;
  &:hover {
    background-image: unset;
    background-color: ${MyTheme.colors.primaryText};
    color:${MyTheme.colors.primaryBgc};
    transform:translateY(3px);
  }
  `