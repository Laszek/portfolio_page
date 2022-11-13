import "./styles.scss";
import Icon from "../../UI/Icon";

const Education = () => {
    return (
        <div className="education--container">
            <div className="education--content">
                <Icon name="education" size={42} />
                <h3 className="text--title">Education</h3>
                <p>
                    I study IT in Collegium Da Vinci,<br/>
                    specialization: web and mobile applications.
                </p>
                <p>
                    There I had opportunity to learn couple of programming languages basics such as Python, C/C++, .NET,
                    Assembler. <br/><br/>
                    I’m also learning how web works and how to create optimised and good UI/UX designed applications.
                </p>
            </div>
        </div>
    )
}

export default Education;