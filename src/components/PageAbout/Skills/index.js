import "./styles.scss";
import Icon from "../../UI/Icon";
import {
    faAngular,
    faCss3Alt,
    faFigma,
    faHtml5,
    faJs,
    faReact,
    faSass,
    faUnity,
    faWordpress
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    const skills = [
        {
            name: "JavaScript",
            description: "Great knowledge of syntax (ES6+), basics of algorythms, async, local storage, canvas",
            icon: faJs
        },
        {
            name: "HTML5",
            description: "Very good knowledge of syntax, semantic markup, canvas",
            icon: faHtml5
        },
        {
            name: "CSS3",
            description: "Great skills in styling elements, flex, grid, animations, RWD, media querries, basic understanding of UI/UX concepts",
            icon: faCss3Alt
        },
        {
            name: "React",
            description: "Good syntax, basic understanding how React works, function-based components, state management, Router, Context API, hooks",
            icon: faReact
        },
        {
            name: "SASS",
            description: "Basic syntax knowledge, mixins, variables",
            icon: faSass
        },
        {
            name: "WordPress",
            description: "Panel and customization Essentials, custom themes, WooCommerce basics",
            icon: faWordpress
        },
    ];
    const otherSkills = [
        {
            name: "Photo/Video",
            icon: faPhotoVideo
        },{
            name: "Figma",
            icon: faFigma
        },{
            name: "C/C++",
            icon: faCode
        },{
            name: "SQL",
            icon: faDatabase
        },{
            name: "GameDev",
            icon: faUnity
        },{
            name: "Angular",
            icon: faAngular
        },
    ]

    return (
        <div className="skills__container">
            <div className="skills__content">
                <h3 className="text__title">Skills</h3>
                <ul className="skills__list">
                    {skills.map((item, index) => (
                        <li className="list__item">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={item.icon} size="xl" />
                            </div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
                <h3 className="text__title">Other</h3>
                <ul className="skills__list--other">
                    {otherSkills.map((item, index) => (
                        <li className="list__item">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={item.icon} size="lg" />
                            </div>
                            <h4>{item.name}</h4>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Skills;