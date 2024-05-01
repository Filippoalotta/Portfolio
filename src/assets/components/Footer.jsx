import '../scss/Footer.scss'
import logoFooter from '../images/logo2-icon.png'

function Footer(){

    return(
        <>
            <section className="footer-container">
                <nav>
                    <ul>
                        <a href="https://github.com/Filippoalotta/Filippoalotta" target="_blank" rel="noopener">
                            <li>
                                Github
                            </li>
                        </a>
                        <a href="https://www.instagram.com/filippoalotta_/" target="_blank" rel="noopener">
                            <li>
                                Instagram
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/filippoalotta/" target="_blank" rel="noopener">
                            <li>
                                Linkedin
                            </li>
                        </a>
                    </ul>
                </nav>
                <a href="#home"><img src={logoFooter} alt="icon logo" /></a>
                <div className="line"></div>
                <div className='reserved'>© 2024 Filippo Alotta. All Rights Reserved.</div>
                <div className='privacy'>
                    <a href="https://www.iubenda.com/privacy-policy/82963324" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>
                    <a href="https://www.iubenda.com/privacy-policy/82963324/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>
                </div>
            </section>
        </>
    )
}

export default Footer;