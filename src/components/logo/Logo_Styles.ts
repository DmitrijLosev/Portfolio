import {FlexWrapper} from "../FlexWrapper";
import {StyledNavLink} from "../StyledNavLink";
import styled from "styled-components";
import {MyTheme} from "../styles/MyTheme.styles";

const StyledLogoNavLink=styled(StyledNavLink)`
    ${FlexWrapper} {
      gap:10px
    }
      &:hover {
        transform:scale(1.2);
        transition: .2s;
      }

      svg{
        filter:drop-shadow(5px 5px 5px ${MyTheme.colors.thirdBgc});
      }
      span {
        text-shadow: 5px 5px 5px ${MyTheme.colors.thirdBgc};
      }
    `
export const S={
    StyledLogoNavLink
}