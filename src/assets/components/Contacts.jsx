import '../scss/Contacts.scss'
import locIcon from '../images/loc-icon.png'
import maiIcon from '../images/mai-icon.png'
import { useState } from 'react';
import { firestore } from '../form/Form';

function Contacts(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();

        firestore.collection('messages').add({
            firstName,
            lastName,
            email,
            message
        }).then(() => {
            setFirstName(''),
            setLastName(''),
            setEmail(''),
            setMessage('')
        }).catch((error) => console.error('error submitting data:', error))
    }

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
                <form onSubmit={handleSubmit}>
                    <input type="text" className='input1' value={firstName} placeholder='Inserisci il tuo nome' autoComplete='off' onChange={(e) => setFirstName(e.target.value)} required/>
                    <input type="text" className='input1' value={lastName} placeholder='Inserisci il tuo cognome' autoComplete='off' onChange={(e) => setLastName(e.target.value)} required/>
                    <input type="email" className='input1' value={email} name="email" id="email" placeholder='Inserisci la tua email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} required/>
                    <textarea name="message" id="message" value={message} placeholder='Scrivici un messaggio' autoComplete='off' onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type="submit" className='button2'>Invia messaggio</button>
                </form>
            </section>
        </>
    )
}

export default Contacts;