import "./styles.scss";
import Slider from "react-slick";
import Card from "./Card";
import { faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Portfolio = ({forwardRef}) => {
    const [ selected, setSelected ] = useState(0);

    const projects = [
        {
            name: "Portfolio page",
            description: "Page made with tools like React and SASS. I’ve created graphic model using Figma.",
            previewImg: "project_1.png",
            githubUrl: "https://www.github.com/laszek",
            techStackIcons: [ faReact, faSass ],
            liveUrl: "localhost:3000"
        },
        {
            name: "Portfolio page",
            description: "Portfolio page description",
            previewImg: "project_1.png",
            githubUrl: "github.com",
            techStackIcons: [ faReact, faSass ],
            liveUrl: "localhost:3000"
        },
        {
            name: "Portfolio page",
            description: "Portfolio page description",
            previewImg: "project_1.png",
            githubUrl: "github.com",
            techStackIcons: [ faReact, faSass ],
            liveUrl: "localhost:3000"
        },
        {
            name: "Portfolio page",
            description: "Portfolio page description",
            previewImg: "project_1.png",
            githubUrl: "github.com",
            techStackIcons: [ faReact, faSass ],
            liveUrl: "localhost:3000"
        }
    ]

    const LeftArrow = ({onClick}) => {
        return (
            <button
                className="control left"
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faAnglesLeft}/>
            </button>
        )
    }
    const RightArrow = ({onClick}) => {
        return (
            <button
                className="control right"
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faAnglesRight} />
            </button>
        )
    }

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        beforeChange: (current, next) => setSelected(next)
    }

    return (
        <div className="portfolio__container" ref={forwardRef}>
            <h2 className="section-heading">portfolio</h2>
            <div className="portfolio__carousel">
                    <Slider {...settings} className="cards">
                        {projects.map((item, index) => (
                            <Card
                                key={index}
                                project={item}
                                className={index === selected ? "slide selected" : "slide"}
                            />
                        ))}
                    </Slider>
            </div>
        </div>
    );
};

export default Portfolio;
