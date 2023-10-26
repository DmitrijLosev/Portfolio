import React from 'react';
import {Header} from "../../layout/header/Header";
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
            </MainContainer>
        </ContactSection>
            </main>
    </>
)
;
};

const ContactSection= styled.section`
min-height: 100vh;
padding:100px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${MainTittle} {
    text-align: center;
  }
`


const StyledForm = styled.form`
padding-top:30px;
display: flex;
flex-direction: column;
  justify-content: center;
align-items: center;
gap: 22px;
  max-width:530px;
  margin:0 auto;
`



const StyledContactBtn =styled(StyledBtn)`
height: 50px;
padding:12px 20px;
  width: 100%;
  
`
const StyledTextarea = styled.textarea`
  border-radius: 6px;
  max-width: 530px;
  width:100%;
  border: 1px solid ${MyTheme.colors.primaryText};
  background-color: transparent;
  color: ${MyTheme.colors.primaryText};
  font-family: Montserrat,sans-serif;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  padding:15px 18px;

  &:focus-visible {
    outline: 1px solid var(--gradient, #00F5A0);
  }
`
const StyledPositionDiv=styled.div`
  position:relative;
  width: 100%;
`
