import Icon from "../UI/Icon";
import "./styles.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({sections}) => {
    const [ selected, setSelected ] = useState(null);
    const [ bgActive, setBgActive] = useState(false)

    useEffect(()=> {
        listenScrollEvent();
        window.addEventListener('scroll', listenScrollEvent);
    }, [])

    // Handling nav item click event to scroll to certain section
    const handleClick = (name, ref) => {
        setSelected(name);

        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        })
    };

    const listenScrollEvent = e => {
        // Navbar detaching from fixed
        if (window.scrollY > 200)
            setBgActive(true)
        else
            setBgActive(false)

        // Changing active section
        if(window.scrollY < sections[1].ref.current.offsetTop - 200)
            setSelected(sections[0].text);
        if(window.scrollY >= sections[1].ref.current.offsetTop - 200 )
            setSelected(sections[1].text);
        if(window.scrollY >= sections[2].ref.current.offsetTop - 200 )
            setSelected(sections[2].text);
        //if(window.scrollY >= sections[3].ref.current.offsetTop - 200 )
        //    setSelected(sections[3].text);

    }

    return (
        <header className={`header ${bgActive ? "scrolled" : "unscrolled"}`}>
            <nav className="navigation">
                <ul className="navigation--list">
                    {sections.map((item, index) =>
                        (
                            <li className={selected === item.text ? "current" : undefined} key={index}>
                                <button className="list--item" onClick={() => handleClick(item.text, item.ref)}>
                                    <FontAwesomeIcon icon={item.icon} color={selected === item.text ? "#35AA17FF" : "white"} size="sm" />
                                    <span className="item--text">{item.text}</span>
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
