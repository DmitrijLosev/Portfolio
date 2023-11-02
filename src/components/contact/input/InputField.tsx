import React from 'react';
import {S} from "../Contact_Styles";

export const InputField:React.FC<{type:"text" | "email", placeholder:string, label:string, id:string,name:string}> =
    ({type,placeholder,label,id, name}) => {
        return (
            <S.PseudoDiv>
                <S.Label htmlFor={id} aria-labelledby={id}>{label}</S.Label>
                <S.Field name={name} id={id} type={type} placeholder={placeholder} aria-placeholder={placeholder}
                              aria-required="true" role="textbox" required/>
            </S.PseudoDiv>
        );
    };

