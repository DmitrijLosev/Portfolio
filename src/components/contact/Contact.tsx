import React from 'react';
import {Header} from "../../layout/header/Header";
import {FlexWrapper} from "../FlexWrapper";
import {MainTittle} from "../../layout/sections/main/Main";
import styled from "styled-components";
import {StyledBtn} from "../StyledButton";
import {MainContainer} from "../MainContainer";
import {InputField, StyledLabel} from "../input/InputField";
import {MyTheme} from "../styles/MyTheme.styles";


export const Contact = () => {
    return (<>
        <Header/>
            <main>
        <ContactSection role="region" aria-label="Contact Me">
            <MainContainer>
                <FlexWrapper direction="column" align="center" justify="center">
                    <MainTittle role="heading" aria-level={1}>CONTACT ME</MainTittle>
                    <StyledForm role="form">
                        <InputField id="name" type="text" placeholder="Enter your name" label="Name"/>
                        <InputField id="email" type="email" placeholder="Enter your e-mail" label="Email"/>
                        <StyledPositionDiv>
                            <StyledTextarea id="message" placeholder="Enter your message"
                                            aria-placeholder="Enter your message" aria-required="true">
                            </StyledTextarea>
                            <StyledLabel htmlFor="message" aria-labelledby="message" >Message</StyledLabel>
                            </StyledPositionDiv>
                                <StyledContactBtn role="button" aria-label="send form" type="submit">Submit</StyledContactBtn>
                    </StyledForm>
                </FlexWrapper>
            </MainContainer>
        </ContactSection>
            </main>
    </>
)
;
};

const ContactSection= styled.section`
height: 100vh;
padding:100px 0 0 0;
`


const StyledForm = styled.form`
padding-top:50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`



const StyledContactBtn =styled(StyledBtn)`
width: 100%;
height: 50px;
padding:12px 20px;
  cursor: pointer;
`
const StyledTextarea = styled.textarea`
  border-radius: 6px;
  min-width: 500px;
  min-height: 150px;
  border: 1px solid ${MyTheme.colors.primaryText};
  background-color: transparent;
  line-height: 45px;
  color: ${MyTheme.colors.primaryText};
  font-family: Montserrat,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-indent: 1em;
  outline: none;

  &:focus-visible {
    outline: 1px solid var(--gradient, #00F5A0);
    border:1px solid var(--gradient, #00F5A0);
  }
`
const StyledPositionDiv=styled.div`
  position:relative;
`
