import './App.scss';
import Nav from "./components/Nav";
import PageHome from "./components/PageHome";
import PageAbout from "./components/PageAbout";
import { useRef } from "react";

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);

    const sections = [
        {
            ref: homeRef,
            iconName: "home",
            text: "home"
        },
        {
            ref: aboutRef,
            iconName: "user",
            text: "about me"
        },
        {
            ref: aboutRef,
            iconName: "portfolio",
            text: "portfolio"
        },
        {
            ref: aboutRef,
            iconName: "links",
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
