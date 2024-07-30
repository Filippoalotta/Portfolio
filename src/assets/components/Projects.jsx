import '../scss/Projects.scss'
import portfolio from '../images/portfolio-screen.png'
import carRental from '../images/carrental-screen.png'
import netflix from '../images/netflix-screen.png'
import agEvent from '../images/agevent-screen.png'

function Projects() {

    return(
        <>
            <section id='projects' className="projects-page">
                <div className="projects-container">
                   <a href="https://github.com/Filippoalotta/Portfolio" target='_blank' rel='noopener'>
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
                   <a href="https://github.com/Filippoalotta/Netflix-clone" target='_blank' rel='noopener'>
                        <div className="project">
                            <img src={netflix} alt="Netflix clone" />
                            <h3>Netflix clone</h3>
                            <div className="skills-container">
                                <span>React</span>
                                <span>Sass</span>
                                <span>Firebase</span>
                            </div>
                        </div>
                   </a>
                   <a href="https://github.com/Filippoalotta/Car-rental" target='_blank' rel='noopener'>
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
                   <a href="https://github.com/Filippoalotta/agevents" target='_blank' rel='noopener'>
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