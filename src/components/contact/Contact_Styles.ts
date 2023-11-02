import styled from "styled-components";
import {MainContainer} from "../MainContainer";
import {StyledBtn} from "../StyledButton";
import {MyTheme} from "../styles/MyTheme.styles";

const ContactSection = styled.section`
  min-height: 100vh;
  min-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MainContainer} {
    padding: 0 25px;
  }

  @media screen and (orientation: landscape) {
    padding: 120px 0 30px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  max-width: 530px;
  margin: 0 auto;
`


const ContactBtn = styled(StyledBtn)`
  height: 50px;
  padding: 12px 20px;
  width: 100%;

`
const Textarea = styled.textarea`
  border-radius: 6px;
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
const PositionDiv = styled.div`
  position: relative;
  width: 100%;
`
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

const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  position:absolute;
  top:-20px;
  left:0;

`
const PseudoDiv = styled(PositionDiv)`
  input:focus + span {
    display: none;
  }
`
export const S= {
    ContactSection,
    Form,
    ContactBtn,
    Textarea,
    PositionDiv,
    Label,
    Field,
    PseudoDiv
}