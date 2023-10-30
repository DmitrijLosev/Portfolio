import React from 'react';
import {Header} from "../../layout/header/Header";
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
                        <StyledForm role="form">
                            <InputField id="name" type="text" placeholder="enter your name" label="Name"/>
                            <InputField id="email" type="email" placeholder="enter your e-mail" label="Email"/>
                            <StyledPositionDiv>
                                <StyledTextarea id="message" placeholder="enter your message"
                                                aria-placeholder="Enter your message" aria-required="true">
                                </StyledTextarea>
                                <StyledLabel htmlFor="message" aria-labelledby="message">Message</StyledLabel>
                            </StyledPositionDiv>
                            <StyledContactBtn role="button" aria-label="send form"
                                              type="submit">Submit</StyledContactBtn>
                        </StyledForm>
                    </MainContainer>
                </ContactSection>
            </main>
        </>
    )
        ;
};

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${MainContainer} {
    padding:0 25px;
  }
`


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  max-width: 530px;
  margin: 0 auto;
  padding: 0 0 30px 0;
`


const StyledContactBtn = styled(StyledBtn)`
  height: 50px;
  padding: 12px 20px;
  width: 100%;

`
const StyledTextarea = styled.textarea`
  border-radius: 6px;
  max-width: 530px;
  width: 100%;
  border: 1px solid ${MyTheme.colors.primaryText};
  background-color: transparent;
  color: ${MyTheme.colors.primaryText};
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  padding: 15px 18px;
  resize: unset;
  height: 165px;

  &:focus-visible {
    outline: 1px solid var(--gradient, ${MyTheme.colors.thirdBgc});
    border: 1px solid var(--gradient, ${MyTheme.colors.thirdBgc});
  }
  &::placeholder {
    color: ${MyTheme.colors.placeholderColor};
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
  }
`
const StyledPositionDiv = styled.div`
  position: relative;
  width: 100%;
`
