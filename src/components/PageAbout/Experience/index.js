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
                    <h3>What I was working on?</h3>
                    <p>
                        Features like Notifications, Posts components, Forms for creating new posts, Profile
                        page, Filtering, Reactions and more.
                    </p>
                    <h3>What I’ve learned?</h3>
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
            startDate: new Date("06.2022"),
            endDate: null,
            isCurrent: true,
            additionalImageUrl: []
        }
    ]

    return (
        <div className="experience__container">
            <ul className="jobs-list">
                {jobs.map((item, index) => (
                    <li className="job">
                        <img src={item.companyLogoUrl} alt={item.companyName + " logo"}/>
                        <div className="job__details">
                            <span className="job__period"></span>
                            <h3 className="job__title">{item.jobName}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience;