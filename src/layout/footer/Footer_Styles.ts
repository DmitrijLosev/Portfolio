import styled from "styled-components";
import {MyTheme} from "../../components/styles/MyTheme.styles";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = styled.footer`
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 280px 0 92px 0;
  @media ${MyTheme.media.mobile} {
    padding: 100px 0 72px 0;
  }

  ${FlexWrapper} {
    gap: 49px;
  }

  ul[id="linkMenu"] {
    gap: 48px;
    
  
    li {
      &:active, &:hover {
        &::before {
          width: 100%;
          bottom: -12px;
        }
      }
    }
  }
}
`
const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 73px;
  list-style: none;
  flex-wrap: wrap;
 
`

const SocialItem = styled.li`
    text-align: center;
`

const SocialNetworkLink = styled.a`
  
  &:hover svg[id="gmail"] circle {
    fill: ${MyTheme.colors.primaryText};
  }

  &:hover svg[id="gmail"] path {
    fill: ${MyTheme.colors.primaryBgc}
  }

  &:hover svg[id="linked"] ellipse {
    fill: ${MyTheme.colors.primaryText}
  }

  &:hover svg[id="linked"] path {
    fill: ${MyTheme.colors.primaryBgc}
  }

  &:hover svg[id="git"] path {
    fill: ${MyTheme.colors.primaryText}
  }

  &:hover svg[id="git"] circle {
    fill: ${MyTheme.colors.primaryBgc}
  }

  &:hover svg {
    transform: translateY(3px);
  }

  &:hover h3 {
    transform: translateY(3px);
  }
`

const Copyright = styled.small`
    opacity: 0.5;
`

const SocialNetworkTitle=styled.h3`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 11.105px;
  letter-spacing: 1.44px;
  text-transform: uppercase;
  color: ${MyTheme.colors.primaryText}
`

export const S={
    Footer,
    SocialList,
    SocialItem,
    SocialNetworkLink,
    Copyright,
    SocialNetworkTitle
}