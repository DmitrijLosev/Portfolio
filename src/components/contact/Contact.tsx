import React from 'react';
import {Header} from "../../layout/header/Header";
import {MainContainer} from "../MainContainer";
import {InputField} from "./input/InputField";
import {S} from "./Contact_Styles";


export const Contact:React.FC = () => {
    return (<>
            <Header/>
            <main>
                <S.ContactSection role="region" aria-label="Contact Me">
                    <MainContainer>
                        <S.Form role="form">
                            <InputField id="name" type="text" placeholder="enter your name" label="Name"/>
                            <InputField id="email" type="email" placeholder="enter your e-mail" label="Email"/>
                            <S.PositionDiv>
                                <S.Textarea id="message" placeholder="enter your message"
                                            aria-placeholder="Enter your message" aria-required="true">
                                </S.Textarea>
                                <S.Label htmlFor="message" aria-labelledby="message">Message</S.Label>
                            </S.PositionDiv>
                            <S.ContactBtn role="button" aria-label="send form"
                                          type="submit">Submit</S.ContactBtn>
                        </S.Form>
                    </MainContainer>
                </S.ContactSection>
            </main>
        </>
    )
        ;
};


