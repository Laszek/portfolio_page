import './App.scss';
import Nav from "./components/Nav";
import PageHome from "./components/PageHome";
import PageAbout from "./components/PageAbout";

function App() {
    return (
        <div className="App">
            <Nav/>
            <PageHome />
            <PageAbout />
        </div>
    );
}

export default App;
