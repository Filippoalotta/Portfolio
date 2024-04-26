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
                            <span>Call to action</span>
                            <span>Modulo di contatto</span>
                            <span>Ottimizzazione della conversione</span>
                            <span>Consegna: 7 giorni</span>
                        </div>
                        <a href="#contacts"><button>Contattami!</button></a>
                    </div>
                    <div className="card">
                        <h4>Sito Vetrina</h4>
                        <h2>€799</h2>
                        <div className="card-content">
                            <span>Servizi landing page inclusi</span>
                            <span>Fino a 5 pagine</span>
                            <span>Galleria foto</span>
                            <span>Sezione FAQ</span>
                            <span>Consegna: 10 giorni</span>
                        </div>
                        <a href="#contacts"><button>Contattami!</button></a>
                    </div>
                    <div className="card">
                        <h4>E-commerce</h4>
                        <h2>€1499</h2>
                        <div className="card-content">
                            <span>Servizi Sito Vetrina inclusi</span>
                            <span>Fino a 10 pagine</span>
                            <span>Elaborazione pagamenti</span>
                            <span>Wish List</span>
                            <span>Consegna: 21 giorni</span>
                        </div>
                        <a href="#contacts"><button>Contattami!</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing;