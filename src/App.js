import './App.scss';
import Nav from "./components/Nav";
import PageHome from "./components/PageHome";
import PageAbout from "./components/PageAbout";
import { useRef } from "react";
import { faFolder, faHome, faLink, faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);

    const sections = [
        {
            ref: homeRef,
            icon: faHome,
            text: "home"
        },
        {
            ref: aboutRef,
            icon: faUser,
            text: "about me"
        },
        {
            ref: aboutRef,
            icon: faFolder,
            text: "portfolio"
        },
        {
            ref: aboutRef,
            icon: faLink,
            text: "links"
        },
    ];

    return (
        <div className="App">
            <Nav sections={sections} />
            <PageHome forwardRef={homeRef} />
            <PageAbout forwardRef={aboutRef} />
        </div>
    );
}

export default App;
