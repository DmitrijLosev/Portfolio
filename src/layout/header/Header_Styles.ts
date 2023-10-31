import {MyTheme} from "../../components/styles/MyTheme.styles";
import styled from "styled-components";

const Header = styled.header`
  background-color: ${MyTheme.colors.primaryBgc};
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 9999;
`

export const S={
    Header
}