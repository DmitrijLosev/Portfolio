import React from 'react';
import styled from "styled-components";
import {MyTheme} from "../styles/MyTheme.styles";

export const InputField:React.FC<{type:"text" | "email", placeholder:string, label:string, id:string}> =
    ({type,placeholder,label,id}) => {
        return (
            <StyledDiv>
                <StyledLabel htmlFor={id} aria-labelledby={id}>{label}</StyledLabel>
                <Field id={id} type={type} placeholder={placeholder} aria-placeholder={placeholder}
                              aria-required="true" role="textbox"/>
                <StyledSpan role="generic" aria-label="input-required">input required</StyledSpan>
            </StyledDiv>
        );
    };

const Field= styled.input`
  border-radius: 6px;
  margin:0 0 26px 0;
  border: 1px solid ${MyTheme.colors.primaryText};
  background-color: transparent;
  color: ${MyTheme.colors.primaryText};
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  padding:15px 18px;
  width:100%;
  input:active + span {
    display: none;
  }

  &:focus-visible {
    outline: 1px solid var(--gradient, #00F5A0);
    border: 1px solid var(--gradient, #00F5A0);
  }

  input::placeholder {
    color: #919B9B;
    font-size: 14px;
    font-weight: 400;
  }

`
const StyledSpan=styled.span`
  position: absolute;
  display: block;
  right:0;
  bottom:7px;
  color: #C05353;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  align-content: center;
`
export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  position:absolute;
  top:-20px;
  left:0;

`
const StyledDiv = styled.div`
  position:relative;
  width:100%;
  input:focus + span {
    display: none;
  }
`