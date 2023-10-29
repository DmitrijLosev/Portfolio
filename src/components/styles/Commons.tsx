import {MyTheme} from "./MyTheme.styles";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: string,
    Fmax?:number,
    Fmin?:number,
}


export const font = ({family, weight, color, lineHeight, Fmin, Fmax} : FontPropsType) =>`
font-family: ${family || "Montserrat, sans-serif"};
font-weight: ${weight || "400"};
color: ${color || MyTheme.colors.primaryText};
line-height: ${lineHeight || "normal"};
font-size: calc( (100vw - 414px)/(1440 - 414)*(${Fmax} - ${Fmin}) + ${Fmin}px )

`