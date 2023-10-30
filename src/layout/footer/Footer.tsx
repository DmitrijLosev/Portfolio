import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MainContainer} from "../../components/MainContainer";
import {MyTheme} from "../../components/styles/MyTheme.styles";
import {FooterMenu} from "../../components/menu/FooterMunu";

const menuItems = ["Projects", "Contact Me"]
export const Footer = () => {
    return (
        <StyledFooter id="Contact">
            <MainContainer>
                <FlexWrapper direction="column" align="center" justify="center">
                    <nav role="navigation">
                        <SocialList role="menu" aria-label="menu">
                            <SocialItem role={"menuitem"} aria-label="SocialMedia1">
                                <SocialNetworkLink role="link" aria-label="GmAil" href="mailto:elk8143228@gmail.com"
                                                   target="_blank">
                                    <svg id="gmail" width="38px" height="38px">
                                        <g id="navGmail">
                                            <circle cx="19.2479" cy="18.8683" r="18.8683"
                                                    fill="url(#paint0_linear_1_2986)"/>
                                            <g clipPath="url(#clip0_1_2986)">
                                                <path
                                                    d="M31.0406 11.4975V26.2383C31.0406 27.0748 30.4031 27.7124 29.5666 27.7124H28.0925V14.3343L19.248 20.6876L10.4035 14.3343V27.7124H8.9294C8.09286 27.7124 7.45532 27.0748 7.45532 26.2383V11.4975C7.45532 11.0788 7.61305 10.7103 7.87765 10.4494C8.01545 10.3115 8.17958 10.2027 8.36026 10.1296C8.54094 10.0564 8.73449 10.0203 8.9294 10.0234H9.42101L19.248 17.1484L29.0749 10.0234H29.5666C29.9852 10.0234 30.3537 10.1811 30.6183 10.4494C30.8829 10.7103 31.0406 11.0788 31.0406 11.4975Z"
                                                    fill="#1F2626"/>
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_1_2986" x1="0.379639" y1="18.8683"
                                                                x2="38.1161"
                                                                y2="18.8683" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#00F5A0"/>
                                                    <stop offset="1" stopColor="#00D9F5"/>
                                                </linearGradient>
                                                <clipPath id="clip0_1_2986">
                                                    <rect width="23.5853" height="23.5853" fill="white"
                                                          transform="translate(7.45508 7.07556)"/>
                                                </clipPath>
                                            </defs>
                                        </g>
                                    </svg>
                                    <StyledSocialNetworkTitle>GMAIL</StyledSocialNetworkTitle>
                                </SocialNetworkLink>
                            </SocialItem>
                            <SocialItem role={"menuitem"} aria-label="SocialMedia2">
                                <SocialNetworkLink role="link" aria-label="LinkenId"
                                                   href="https://www.linkedin.com/in/dmitrij-losev-9b8121277"
                                                   target="_blank">
                                    <svg id="linked" width="38px" height="38px">
                                        <g id="navLinked">
                                            <ellipse cx="19.3519" cy="18.868" rx="18.8683" ry="18.8683"
                                                     fill="url(#paint0_linear_1_2993)"/>
                                            <path
                                                d="M10.0633 28.7052H14.0113V14.0975H10.0633V28.7052ZM12.0373 7.64905C10.7213 7.64905 9.66846 8.70185 9.66846 10.0179C9.66846 11.3339 10.7213 12.3867 12.0373 12.3867C13.3533 12.3867 14.4061 11.3339 14.4061 10.0179C14.4061 8.70185 13.3533 7.64905 12.0373 7.64905ZM20.7229 16.3347V14.0975H16.7749V28.7052H20.7229V21.2039C20.7229 16.9927 26.1185 16.7295 26.1185 21.2039V28.7052H30.0666V19.7563C30.0666 12.6499 22.5653 12.9131 20.7229 16.3347Z"
                                                fill="#1F2626"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_1_2993" x1="0.483643" y1="18.868"
                                                                x2="38.2201"
                                                                y2="18.868" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#00F5A0"/>
                                                    <stop offset="1" stopColor="#00D9F5"/>
                                                </linearGradient>
                                            </defs>
                                        </g>
                                    </svg>
                                    <StyledSocialNetworkTitle>LINKEDIN</StyledSocialNetworkTitle>
                                </SocialNetworkLink>
                            </SocialItem>
                            <SocialItem role={"menuitem"} aria-label="SocialMedia3">
                                <SocialNetworkLink role="link" aria-label="github"
                                                   href="https://www.github.com/DmitrijLosev" target="_blank">
                                    <svg id="git" width="38px" height="38px">
                                        <g id="navGithub">
                                            <circle cx="19.2142" cy="18.8683" r="18.8683" fill="#1F2626"/>
                                            <g clipPath="url(#clip0_1_3000)">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M19.2142 0C8.78949 0 0.345947 8.44354 0.345947 18.8682C0.345947 27.2175 5.74698 34.2695 13.2471 36.7695C14.1905 36.9346 14.5443 36.3686 14.5443 35.8733C14.5443 35.4251 14.5207 33.9393 14.5207 32.3591C9.78007 33.2317 8.55364 31.2034 8.17627 30.142C7.964 29.5996 7.04418 27.925 6.24228 27.4769C5.58189 27.1231 4.63847 26.2505 6.21869 26.2269C7.70457 26.2033 8.7659 27.5948 9.11968 28.1609C10.8178 31.0147 13.5301 30.2128 14.6151 29.7175C14.7802 28.4911 15.2755 27.6656 15.8179 27.1939C11.6197 26.7222 7.23286 25.0948 7.23286 17.8777C7.23286 15.8257 7.964 14.1276 9.16685 12.8068C8.97817 12.3351 8.31778 10.4011 9.35554 7.80674C9.35554 7.80674 10.9358 7.31145 14.5443 9.74073C16.0538 9.3162 17.6576 9.10393 19.2614 9.10393C20.8652 9.10393 22.469 9.3162 23.9784 9.74073C27.587 7.28786 29.1672 7.80674 29.1672 7.80674C30.205 10.4011 29.5446 12.3351 29.3559 12.8068C30.5587 14.1276 31.2899 15.8022 31.2899 17.8777C31.2899 25.1184 26.8794 26.7222 22.6812 27.1939C23.3652 27.7835 23.9548 28.9156 23.9548 30.6845C23.9548 33.2081 23.9313 35.2365 23.9313 35.8733C23.9313 36.3686 24.285 36.9582 25.2285 36.7695C28.9741 35.5049 32.2289 33.0976 34.5347 29.8863C36.8405 26.6751 38.0813 22.8216 38.0825 18.8682C38.0825 8.44354 29.6389 0 19.2142 0Z"
                                                      fill="url(#paint0_linear_1_3000)"/>
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_1_3000" x1="0.345947" y1="18.4028"
                                                                x2="38.0825"
                                                                y2="18.4028" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#00F5A0"/>
                                                    <stop offset="1" stopColor="#00D9F5"/>
                                                </linearGradient>
                                                <clipPath id="clip0_1_3000">
                                                    <rect width="37.7365" height="37.7365" fill="white"
                                                          transform="translate(0.345947)"/>
                                                </clipPath>
                                            </defs>
                                        </g>
                                    </svg>
                                    <StyledSocialNetworkTitle>GITHUB</StyledSocialNetworkTitle>
                                </SocialNetworkLink>
                            </SocialItem>
                        </SocialList>
                    </nav>
                    <FooterMenu menuItems={menuItems} fontSize="14px" fontWeight="400"/>
                    <Copyright>
                        © 2023 Dzmitry Loseu, All Rights Reserved.
                    </Copyright>
                </FlexWrapper>
            </MainContainer>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
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
const StyledSocialNetworkTitle=styled.h3`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 11.105px;
  letter-spacing: 1.44px;
  text-transform: uppercase;
  color: ${MyTheme.colors.primaryText}
`