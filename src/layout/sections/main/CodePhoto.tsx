import styled from "styled-components";
import code from "../../../assets/images/code.svg"
export const CodePhoto = () => {
    return <StyledCodePhoto src={code} alt={"Code photo is here"}/>
}

const StyledCodePhoto = styled.img`
  position: absolute;
  width: 80px;
  height: 45px;
`