import '../scss/Services.scss'
import devIcon from '../images/dev-icon.png'
import seoIcon from '../images/seo-icon.png'
import supIcon from '../images/sup-icon.png'

function Services(){

    return(
        <>
            <section id='services' className="services-container">
                <h3>Web Developer</h3>
                <h2>Filippo Alotta Web Developer</h2>
                <p>Sono <span>Filippo Alotta</span>, esperto nello sviluppo di siti web che valorizzano l&apos;identità online di aziende, imprese e professionisti.</p>
                <div className="services-content-container">
                    <div className='services-content'>
                        <img src={devIcon} alt="web development and design icon" />
                        <p>Sviluppo siti web che si distinguono, con un design accattivante e funzionalità intuitive.</p>
                    </div>
                    <div className='services-content'>
                        <img src={seoIcon} alt="web development and design icon" />
                        <p>Aumenta la tua visibilità con strategie SEO personalizzate per posizionarti al top sui motori di ricerca.</p>
                    </div>
                    <div className='services-content'>
                        <img src={supIcon} alt="web development and design icon" />
                        <p>Sicurezza e tranquillità garantite. Un supporto tecnico per ogni esigenza del tuo sito.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;