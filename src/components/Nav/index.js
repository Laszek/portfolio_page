import Icon from "../UI/Icon";
import "./styles.scss";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
    {
        ref: "home",
        iconName: "home",
        text: "home"
    },
    {
        ref: "aboutme",
        iconName: "user",
        text: "about me"
    },
    {
        ref: "portfolio",
        iconName: "portfolio",
        text: "portfolio"
    },
    {
        ref: "links",
        iconName: "links",
        text: "links"
    },
];

const Nav = () => {
    const [ selected, setSelected ] = useState("home");
    const [ bgActive, setBgActive] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

    const handleClick = (name) => {
        setSelected("")
        setSelected(name)
    };

    const listenScrollEvent = e => {
        if (window.scrollY > 400)
            setBgActive(true)
        else
            setBgActive(false)
    }

    return (
        <header className={`header ${bgActive ? "scrolled" : "unscrolled"}`}>
            <nav className="navigation">
                <ul className="navigation--list">
                    {NAV_ITEMS.map((item, index) =>
                        (
                            <li className={selected == item.ref ? "current" : undefined} key={index}>
                                <button className="list--item" onClick={() => handleClick(item.ref)}>
                                    <Icon name={`${item.iconName}${selected == item.ref ? "-green" : ""}`} size="24"/>
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
