import React from 'react';
import {S} from "../Contact_Styles";

export const InputField:React.FC<{type:"text" | "email", placeholder:string, label:string, id:string}> =
    ({type,placeholder,label,id}) => {
        return (
            <S.PseudoDiv>
                <S.Label htmlFor={id} aria-labelledby={id}>{label}</S.Label>
                <S.Field id={id} type={type} placeholder={placeholder} aria-placeholder={placeholder}
                              aria-required="true" role="textbox"/>
                <S.Error role="generic" aria-label="input-required">input required</S.Error>
            </S.PseudoDiv>
        );
    };

