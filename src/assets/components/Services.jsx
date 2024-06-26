import '../scss/Services.scss'
import reactIcon from '../images/react.svg'
import apiIcon from '../images/api-img.png'
import gitHubIcon from '../images/github-mark.svg'

function Services(){

    return(
        <>
            <section id='services' className="services-container">
                <h3>Filippo Alotta</h3>
                <h2>Front End React Developer</h2>
                <p>Sono un front-end developer specializzato nello sviluppo di esperienze utente intuitive e responsive.</p>
                <div className="services-content-container">
                    <div className='services-content'>
                        <a href="https://it.legacy.reactjs.org/" rel='noopener' target='_blank'>
                            <img src={reactIcon} alt="React.js icon" />
                        </a>
                        <p>Creo interfacce utente interattive utilizzando React, sfruttando componenti riutilizzabili.</p>
                    </div>
                    <div className='services-content'>
                        <a href="#">
                            <img src={apiIcon} alt="API integration icon" />
                        </a>
                        <p>Esperto nell&apos;integrazione di API e nella gestione dello stato delle applicazioni con React.</p>
                    </div>
                    <div className='services-content'>
                        <a href="https://github.com/Filippoalotta" rel='noopener' target='_blank'>
                            <img src={gitHubIcon} alt="GitHub icon" />
                        </a>
                        <p>Utilizzo Git e piattaforme come GitHub per il versionamento del codice e il controllo delle versioni.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;