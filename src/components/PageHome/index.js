import Icon from "../UI/Icon";
import "./styles.scss";

const PageHome = ({forwardRef}) => {

    return (
        <div className="home--container" ref={forwardRef}>
            <div className="home--content">
                <p className="name">Maciej Łaszewski</p>
                <h1 className="heading">CODE IS MY <span className="accent">NATURE</span>.</h1>

                { false && <div className="buttons">
                    <button className="btn">
                        <Icon name="portfolio" size={24}/>
                        <span>portfolio</span>
                    </button>
                    <button className="btn stroke">
                        <Icon name="user" size={24}/>
                        <span>about me</span>
                    </button>
                </div>}
            </div>
        </div>
    )
}

export default PageHome;