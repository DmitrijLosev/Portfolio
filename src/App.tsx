import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutme/AboutMe";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div>
            <Particle />
            <Header/>
            <main>
                <Main/>
                <AboutMe/>
                <Projects/>
                <Skills/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;

