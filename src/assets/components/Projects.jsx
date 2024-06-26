import '../scss/Projects.scss'
import portfolio from '../images/portfolio-screen.png'
import carRental from '../images/carrental-screen.png'
import agEvent from '../images/agevent-screen.png'

function Projects() {

    return(
        <>
            <section id='projects' className="projects-page">
                <div className="projects-container">
                   <a href="https://filippoalotta.netlify.app/" target='_blank' rel='noopener'>
                        <div className="project">
                            <img src={portfolio} alt="portfolio project" />
                            <h3>Portfolio</h3>
                            <div className="skills-container">
                                <span>React</span>
                                <span>Sass</span>
                                <span>Firebase</span>
                            </div>
                        </div>
                   </a>
                   <a href="https://carrentalau.netlify.app/" target='_blank' rel='noopener'>
                        <div className="project">
                            <img src={carRental} alt="car rental project" />
                            <h3>Car Rental</h3>
                            <div className="skills-container">
                                <span>React</span>
                                <span>Sass</span>
                                <span>Firebase</span>
                            </div>
                        </div>
                   </a>
                   <a href="https://agevent.netlify.app/" target='_blank' rel='noopener'>
                        <div className="project">
                            <img src={agEvent} alt="event agency project" />
                            <h3>AGevent</h3>
                            <div className="skills-container">
                                <span>React</span>
                                <span>Sass</span>
                                <span>Firebase</span>
                            </div>
                        </div>
                   </a>
                </div>
                <h1>Nuovi progetti in arrivo...👨🏻‍💻</h1>
            </section>
        </>
    )
}

export default Projects;