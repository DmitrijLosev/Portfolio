import React from 'react';
import {Header} from "../../layout/header/Header";
import {FlexWrapper} from "../FlexWrapper";
import {MainTittle} from "../../layout/sections/main/Main";
import styled from "styled-components";
import {StyledBtn} from "../Button";
import {MainContainer} from "../MainContainer";
import {MyTheme} from "../styles/MyTheme.styles";


export const Contact = () => {
    return (<>
            <Header/>
            <ContactSection>
                <MainContainer>
                    <FlexWrapper direction="column" align="center" justify="center">
                        <MainTittle>CONTACT ME</MainTittle>
                        <StyledForm>
                            <StyledLabel>Name<MyField placeholder="Enter your name"/></StyledLabel>
                            <StyledLabel>Email<MyField placeholder="Enter your e-mail"/></StyledLabel>
                            <StyledLabel>Message<MyField as={"textarea"} placeholder="Hi, i will ..."/></StyledLabel>
                            <StyledContactBtn type="submit">Submit</StyledContactBtn>
                        </StyledForm>
                    </FlexWrapper>
                </MainContainer>
            </ContactSection>
        </>
    )
        ;
};

const ContactSection= styled.section`
  height: 100vh;
  padding:100px 0 0 0;
`


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const MyField = styled.input`
  display: block;
  margin-bottom: 10px;
  border-radius: 6px;
  
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${MyTheme.colors.primaryText};
  font-family: Montserrat,sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const StyledContactBtn =styled(StyledBtn)`
  width: 100%;
  height: 50px;
  padding:12px 20px;
`