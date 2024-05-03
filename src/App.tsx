import './App.css';

import {Main} from "layout/sections/main/Main";
import {Skills} from "layout/sections/skills/Skills";
import {Header} from "layout/header/Header";
import {Works} from "layout/sections/works/Works";
import {Testimony} from "layout/sections/testimony/Testimony";
import {Contact} from "layout/sections/contact/Contact";
import {Slogan} from "layout/sections/slogan/Slogan";
import {Footer} from "layout/footer/Footer";
import {Particle} from "components/particle/Particle";
import {GoTopBtn} from "components/goTopBtn/GoTopBtn";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            {/*<Testimony/>*/}
            <Contact/>
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;

