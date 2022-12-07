import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Card = ({project, className}) => {
    return (
        <div className={"card "+className}>
            <div className="preview-image">
                <img src={`/images/projects/${project.previewImg}`} alt={project.name+" preview image"} />
            </div>
            <div className="project-info">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a
                    className="btn stroke github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    <span>github</span>
                </a>
            </div>
            <div className="project-info__footer">
                <div className="tech-stack">
                    {project.techStackIcons.map((item, index) =>
                        <FontAwesomeIcon icon={item} size="2xl" />
                    )}
                </div>
                <a
                    className="btn live"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faPlay} size="lg" />
                    <span>live</span>
                </a>
            </div>
        </div>
    );
};

export default Card;
