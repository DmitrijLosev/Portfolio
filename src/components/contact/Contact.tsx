import React, {ElementRef, useRef} from 'react';
import {Header} from "../../layout/header/Header";
import {MainContainer} from "../MainContainer";
import {InputField} from "./input/InputField";
import {S} from "./Contact_Styles";
import {Particle} from "../particle/Particle";
import emailjs from '@emailjs/browser';

export const Contact:React.FC = () => {

    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        form.current &&
        emailjs.sendForm('service_k6p1ik8', 'template_aho815s', form.current,
            'xGsRMl7gG-XvyjZHi')
            .then((result) => {
                console.log(result.text);
               form.current?.reset();
            }, (error) => {
                console.log(error.text);
                alert(error.text);
            });
    };


    return (<>
            <Header/>
            <Particle/>
            <main>
                <S.ContactSection role="region" aria-label="Contact Me">
                    <MainContainer>
                        <S.Form role="form" ref={form} onSubmit={sendEmail}>
                            <InputField name="user_name" id="name" type="text" placeholder="enter your name" label="Name" />
                            <InputField name="email" id="email" type="email" placeholder="enter your e-mail" label="Email" />
                            <S.PositionDiv>
                                <S.Textarea id="message" placeholder="enter your message"
                                            aria-placeholder="Enter your message" aria-required="true"
                                            required name="message">
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


