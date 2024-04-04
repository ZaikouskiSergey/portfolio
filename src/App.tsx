import './App.css';

import {Main} from "layout/sections/main/Main";
import {Skills} from "layout/sections/skills/Skills";
import {Header} from "layout/header/Header";
function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;

