import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./components/styles/Global.styles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contact} from "./components/contact/Contact";
import {ThemeProvider} from "styled-components";
import {MyTheme} from "./components/styles/MyTheme.styles";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={MyTheme}>
        <BrowserRouter basename="/Portfolio">
            <Routes>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<App/>}/>
            </Routes>
            <GlobalStyles/>
        </BrowserRouter>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
