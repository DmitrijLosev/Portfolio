import React from 'react';
import {Header} from "../../layout/header/Header";
import {FlexWrapper} from "../FlexWrapper";
import {MainTittle, StyledMain} from "../../layout/sections/main/Main";
import styled from "styled-components";
import {StyledBtn} from "../Button";

export const Contact = () => {
    return (<>
            <Header/>
            <StyledMain>
                <FlexWrapper direction="column" align="center" justify="center">
                    <MainTittle>CONTACT ME</MainTittle>
                    <StyledForm>
                        <StyledLabel>Name<Field placeholder="Enter your name"/></StyledLabel>
                        <StyledLabel>Email<Field placeholder="Enter your e-mail"/></StyledLabel>
                        <StyledLabel>Message<Field as={"textarea"} placeholder="Hi, i will ..."/></StyledLabel>
                        <StyledBtn type="submit">Submit</StyledBtn>
                    </StyledForm>
                </FlexWrapper>
            </StyledMain>
        </>
    )
        ;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Field = styled.input`
  display: block;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;