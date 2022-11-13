import "./styles.scss";
import Education from "./Education";
import Skills from "./Skills";

const PageAbout = ({forwardRef}) => {

    return (
        <div className="about--container" ref={forwardRef}>
            <div className="about--hero">
                <h2 className="section-heading">about me</h2>
                <div className="content">
                    <div className="text--container">
                        <h3 className="text--title">Nunc non consectetur quam.</h3>
                        <p className="text--description">
                            Praesent at risus rhoncus, interdum ante quis, fringilla purus.
                            <br /><br />
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. In eu finibus turpis, quis maximus dolor. Etiam enim lorem, congue ut arcu et, sollicitudin consequat neque.
                            <br /><br />
                            Donec elementum orci a sapien convallis suscipit quis nec purus.
                        </p>
                    </div>
                    <div className="image--container">
                        <img src="/images/photo.png" alt="me (Maciej Łaszewski)" />
                    </div>
                </div>
            </div>
            <Education />
            <Skills />
        </div>
    )
}

export default PageAbout;