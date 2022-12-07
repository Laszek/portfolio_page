import "./styles.scss";

const Experience = () => {

    const jobs = [
        {
            jobName: "Junior FrontEnd Developer",
            jobDescription:
                (<>
                    <p>
                        With team of Frontend and Backend devs we work on a platform which would be helpful for IT
                        beginners.
                        It includes list of courses, posts about IT and job offers.
                    </p>
                    <h4>What I was working on?</h4>
                    <p>
                        Features like Notifications, Posts components, Forms for creating new posts, Profile
                        page, Filtering, Reactions and more.
                    </p>
                    <h4>What I’ve learned?</h4>
                    <ul>
                        <li>React hooks and more advanced features of this framework</li>
                        <li>Axios and REST API</li>
                        <li>Better understanding of UX concepts</li>
                        <li>Organisation of work in Agile/Scrum (Jira sprints, Trello)</li>
                        <li>Understanding of how Backend works (Django)</li>
                    </ul>
                </>)
            ,
            companyName: "BeeWeb/Ficori",
            companyLogoUrl: "https://beeweb.pl/wp-content/uploads/2018/05/navlogo-img.png",
            startDate: new Date(2022, 5),
            endDate: null,
            isCurrent: true,
            additionalImageUrl: []
        },
    ]

    return (
        <div className="experience__container">
            <h3 className="text__title">Experience</h3>
            <ul className="jobs-list">
                {jobs.map((item, index) => (
                    <li className="job">
                        <div className="job__company-logo">
                            <img src={item.companyLogoUrl} alt={item.companyName + " logo"} width="100%"/>
                        </div>
                        <div className="job__details">
                            <span className="job__period">
                                {`${item.startDate.getMonth()}.${item.startDate.getFullYear()}`} - {item.isCurrent
                                    ? "now"
                                    : `${item?.endDate.getMonth()}.${item?.endDate.getFullYear()}`}</span>
                            <h4 className="job__title">{item.jobName}</h4>
                            <div className="job__description">
                                {item.jobDescription}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience;