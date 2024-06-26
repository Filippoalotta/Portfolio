import '../scss/Banner.scss'
import ProfilePicture from '../images/my-img2.jpeg'

function Banner(){

    return(
        <>
            <section id='home' className="banner-container">
                <div className="banner-content">
                    <h1>Front-End React Developer 💻</h1>
                    <p>Ciao, sono Filippo Alotta, un Front-end React Developer di Palermo.</p>
                    <div className="skills-container">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Sass</span>
                        <span>Bootstrap</span>
                        <span>Javascript</span>
                        <span>React</span>
                        <span>Firebase</span>
                    </div>
                </div>
                <img src={ProfilePicture} alt="Profile picture" className='profile-picture' />
            </section>
        </>
    )
}

export default Banner;