import Icon from "../UI/Icon";
import "./styles.scss";
import { useEffect, useState } from "react";

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

    }

    return (
        <header className={`header ${bgActive ? "scrolled" : "unscrolled"}`}>
            <nav className="navigation">
                <ul className="navigation--list">
                    {sections.map((item, index) =>
                        (
                            <li className={selected === item.text ? "current" : undefined} key={index}>
                                <button className="list--item" onClick={() => handleClick(item.text, item.ref)}>
                                    <Icon name={`${item.iconName}${selected === item.text ? "-green" : ""}`} size="24"/>
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
