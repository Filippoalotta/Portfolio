import '../scss/Assistance.scss'
import assistance from '../images/assistance.jpg'

function Assistance(){

    return(
        <>
            <section className="assistance-section">
                <div className="assistance-content">
                    <h3>Assistenza</h3>
                    <h2>Servizio di Assistenza Web</h2>
                    <p>Attraverso i miei servizi di assistenza web, offro un supporto completo per garantire che i siti web dei miei clienti rimangano sicuri, performanti e all&apos;avanguardia. Dal monitoraggio costante delle prestazioni e della sicurezza alla risoluzione tempestiva dei problemi tecnici.</p>
                </div>
                <img src={assistance} alt="assistance image" />
            </section>
        </>
    )
}

export default Assistance;