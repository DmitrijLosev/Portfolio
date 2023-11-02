import React from 'react';
import photoWebp from '../../../assets/images/photo.webp'
import photoWebp2x from '../../../assets/images/photo2x.webp'
import photoWebp3x from '../../../assets/images/photo3x.webp'
import photoJpg from '../../../assets/images/photo.jpg'
import photoJpg2x from '../../../assets/images/photo2x.jpg'
import photoJpg3x from '../../../assets/images/photo3x.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {MainContainer} from "../../../components/MainContainer";
import {StyledNavLink} from "../../../components/StyledNavLink";
import fon from "../../../assets/images/fone.svg";
import codes from "../../../assets/images/codes.svg"
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.StyledMain role="region" aria-label="mainInfo" id="Home">
            <MainContainer id="container">
                <FlexWrapper id="MainSectionFlexWrapper" direction="row" justify="space-between" align="center"
                             wrap="wrap-reverse">
                    <S.ArrowLink  smooth={true} role="link" aria-label="nextSection" id="arrowScroll"
                                  to="/#Contact">
                        <Icon iconId="arrowScroll" width="32"
                              height="32"
                              viewBox="0 0 32 32"/></S.ArrowLink>
                    <FlexWrapper id="textFlexWrapper" direction="column" justify="center" align="start" wrap="wrap">
                        <S.MainTittle role="heading" aria-level={1}>
                            <p>WEB DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['front-end developer', 'web developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                }}
                            />
                        </S.MainTittle>
                        <S.Name role="heading" aria-level={2}>Dzmity Loseu</S.Name>
                        <S.StyledMainText role="paragraph" aria-label="MainInformation">Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat
                            sunt.</S.StyledMainText>
                        <StyledNavLink role="link" aria-label="MailMe" to="/contact" type="colored">Contact
                            me</StyledNavLink>
                    </FlexWrapper>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <S.PseudoDiv>

                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet={`${photoWebp} 1x, ${photoWebp2x} 2x, ${photoWebp3x} 3x`}
                                />
                                <source
                                    type="image/jpeg"
                                    srcSet={`${photoJpg} 1x, ${photoJpg2x} 2x, ${photoJpg3x} 3x`}
                                />
                                <S.StyledPhoto role="img" aria-label="mainPhoto"
                                               src={photoJpg}
                                               srcSet={`${photoJpg2x} 2x, ${photoJpg3x} 3x`}
                                               alt="Main photo here"
                                />
                            </picture>

                            <S.StyledCodesPhoto id="code1 photo" role="img" aria-hidden="true" src={codes}
                                                alt={"Codes 1 photo for main Photo"}/>
                            <S.StyledCodesPhoto id="code2 photo" role="img" aria-hidden="true" src={codes}
                                                alt={"Codes 2 photo for main Photo"}/>
                            <S.StyledFon id="fon photo" role="img" aria-hidden="true" src={fon}
                                         alt={"Fon for photo here"}/>
                        </S.PseudoDiv>
                    </Tilt>
                </FlexWrapper>
            </MainContainer>
        </S.StyledMain>
    );
};

