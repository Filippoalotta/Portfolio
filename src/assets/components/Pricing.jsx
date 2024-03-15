import '../scss/Pricing.scss'

function Pricing(){

    return(
        <>
            <section id='pricing' className="pricing-container">
                <h3>Pricing</h3>
                <h2>Investi nel tuo successo</h2>
                <p>Scopri i prezzi più convenienti e scegli il pacchetto perfetto per realizzare la tua idea.</p>
                <div className="cards-container">
                    <div className="card">
                        <h4>Landing Page</h4>
                        <h2>€499</h2>
                        <div className="card-content">
                            <span>1 pagina</span>
                            <span>Assistenza tecnica (15 giorni)</span>
                            <span>API di terze parti</span>
                            <span>Modulo di contatto</span>
                            <span>Ottimizzazione della conversione</span>
                            <span>Supporto post-sviluppo</span>
                        </div>
                        <button><a href="#contacts">Contattami!</a></button>
                    </div>
                    <div className="card">
                        <h4>Sito Vetrina</h4>
                        <h2>€799</h2>
                        <div className="card-content">
                            <span>Servizi landing page inclusi</span>
                            <span>Fino a 5 pagine</span>
                            <span>Assistenza tecnica (30 giorni)</span>
                            <span>Galleria foto e video</span>
                            <span>Elaborazione pagamenti</span>
                            <span>Supporto post-sviluppo</span>
                        </div>
                        <button><a href="#contacts">Contattami!</a></button>
                    </div>
                    <div className="card">
                        <h4>E-commerce</h4>
                        <h2>€1499</h2>
                        <div className="card-content">
                            <span>Servizi Sito Vetrina inclusi</span>
                            <span>Fino a 10 pagine</span>
                            <span>Assistenza tecnica (30 giorni)</span>
                            <span>Strumenti di Marketing</span>
                            <span>Integrazione Social Media</span>
                            <span>Supporto post-sviluppo</span>
                        </div>
                        <button><a href="#contacts">Contattami!</a></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing;