import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
    return (
        <div className="education__container">
            <div className="content__container">
                <div className="school-logo">
                    <img src="https://avatars.githubusercontent.com/u/64331708?s=200&v=4"/>
                </div>
                <div className="education__content">
                    <FontAwesomeIcon icon={faGraduationCap} size="2xl" />
                    <h3 className="text__title">Education</h3>
                    <p>
                        I study IT in Collegium Da Vinci,<br/>
                        specialization: web and mobile applications.<br/><br/>
                        There I had opportunity to learn couple of programming languages basics such as Python, C/C++,
                        .NET,
                        Assembler. <br/><br/>
                        I’m also learning how web works and how to create optimised and good UI/UX designed
                        applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education;