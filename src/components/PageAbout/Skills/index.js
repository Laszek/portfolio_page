import "./styles.scss";
import Icon from "../../UI/Icon";

const Skills = () => {
    const skills = [
        {
            name: "HTML5",
            description: "Lorem ipsum dolor sit amet.\n Benediktum sakrificum del piero dirte",
            icon: "html5"
        },
        {
            name: "JavaScript (ES6+)",
            description: "Lorem ipsum dolor sit amet.\n Benediktum sakrificum del piero dirte",
            icon: "javascript"
        },
    ]

    return (
        <div className="skills--container">
            <div className="skills--content">
                <h3 className="text--title">Skills</h3>
                <ul className="skills--list">
                    {skills.map((item, index) => (
                        <li className="list--item">
                            <Icon name={item.icon} size={48} />
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Skills;