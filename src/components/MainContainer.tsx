import styled from "styled-components";
import {MyTheme} from "./styles/MyTheme.styles";

export const MainContainer=styled.div`

  max-width: 1180px;
  width: 100%;
  height: 100%;
  margin:0 auto;
  padding:0 25px 0 60px;
  @media ${MyTheme.media.mobile} {
    padding:0 25px;
  }
`