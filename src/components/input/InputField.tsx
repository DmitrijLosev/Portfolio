import React from 'react';
import styled from "styled-components";
import {MyTheme} from "../styles/MyTheme.styles";

export const InputField:React.FC<{type:"text" | "email", placeholder:string, label:string, id:string}> =
    ({type,placeholder,label,id}) => {
        return (
            <StyledDiv>
                <StyledLabel htmlFor={id} aria-labelledby={id}>{label}</StyledLabel>
                <StyledInput id={id} type={type} placeholder={placeholder} aria-placeholder={placeholder}
                              aria-required="true" role="textbox"/>
                <StyledSpan role="generic" aria-label="input-required">input required</StyledSpan>
            </StyledDiv>
        );
    };

const StyledInput= styled.input`
  border-radius: 6px;
  min-width: 500px;
  margin-bottom: 10px;
  border: 1px solid ${MyTheme.colors.primaryText};
  background-color: transparent;
  line-height: 45px;
  color: ${MyTheme.colors.primaryText};
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-indent: 1em;
  outline: none;
  
  input:active + span {
    display: none;
  }

  &:focus-visible {
    outline: 1px solid var(--gradient, #00F5A0);
    border: 1px solid var(--gradient, #00F5A0);
  }

  input::placeholder {
    color: #919B9B;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

`
const StyledSpan=styled.span`
  position: absolute;
  display: block;
  right:0;
  color: #C05353;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 500;
  align-content: center;
`
export const StyledLabel = styled.label`
  color: ${MyTheme.colors.primaryText};
  font-family: Montserrat,sans-serif;
  font-size: 14px;
  font-weight: 400;
  position:absolute;
  top:-20px;
  left:0;

`
const StyledDiv = styled.div`
  position:relative;
  input:focus + span {
    display: none;
  }
`