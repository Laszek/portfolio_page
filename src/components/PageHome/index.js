import Icon from "../UI/Icon";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const PageHome = ({forwardRef}) => {

    return (
        <div className="home__container" ref={forwardRef}>
            <div className="home__content">
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
                <div className="info">
                    <div className="info__element">
                        <FontAwesomeIcon icon={faGithub} width="1em" />
                        <a href="https://www.github.com/laszek/" target="_blank">
                            github.com/laszek/
                        </a>
                    </div>
                    <div className="info__element">
                        <FontAwesomeIcon icon={faLinkedin} width="1em" />
                        <a href="https://www.linkedin.com/in/maciej-laszewski/" target="_blank">
                            linkedin.com/in/maciej-laszewski/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHome;