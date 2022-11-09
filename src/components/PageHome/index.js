import Icon from "../UI/Icon";
import "./styles.scss";
import { useEffect, useState } from "react";

const PageHome = () => {

    return (
        <div className="home--container">
            <div className="home--content">
                <p className="name">Maciej Łaszewski</p>
                <h1 className="heading">CODE IS MY <span className="accent">NATURE</span>.</h1>

                <div className="buttons">
                    <button className="btn">portfolio</button>
                    <button className="btn stroke">about me</button>
                </div>
            </div>
        </div>
    )
}

export default PageHome;