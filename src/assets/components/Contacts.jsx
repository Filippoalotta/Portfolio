import '../scss/Contacts.scss'
import locIcon from '../images/loc-icon.png'
import maiIcon from '../images/mai-icon.png'

function Contacts(){

    return(
        <>
            <section id='contacts' className="contacts-container">
                <h3>Contatti</h3>
                <h2>Hai bisogno di un sito web? Parliamone!</h2>
                <div className="contacts-content-container">
                    <div className="contacts-content">
                        <img src={locIcon} alt="Location icon" />
                        <div className='contacts-text'>
                            <h4>Località</h4>
                            <span>Palermo, Italia</span>
                        </div>
                    </div>
                    <div className="contacts-content">
                        <img src={maiIcon} alt="E-mail icon" />
                        <div className='contacts-text'>
                            <h4>Mail</h4>
                            <span>Alottafilippo@gmail.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;