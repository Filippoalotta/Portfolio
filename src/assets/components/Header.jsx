import { useState, useEffect } from 'react'
import logo from '../images/logo-icon1.png'
import '../scss/Header.scss'

function Header(){

    const [hambOpen, setHambOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const handleClick = ()=> {
        setHambOpen(!hambOpen);
        setMenuOpen(!menuOpen);
    }

    const handleClickMenu = ()=> {
        setHambOpen(false);
        setMenuOpen(false);
    }

    return(
        <>
            <header className={hambOpen ? 'open-hamb' : ''}>
                <img src={logo} alt="logo" className='logo' />
                <nav className='nav-menu'>
                    <ul className='nav-menu-ul'>
                        <a href="#home"><li>Home</li></a>
                        <a href="#services"><li>Servizi</li></a>
                        <a href="#projects"><li>Portfolio</li></a>
                        <a href="#contacts"><li>Contatti</li></a>
                    </ul>
                </nav>
                <nav className="nav-hamb" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
                <nav className={`${'nav-mb'} ${menuOpen ? 'open-nav' : ''}`}>
                    <ul>
                        <a href="#home" onClick={handleClickMenu}><li>Home</li></a>
                        <a href="#services" onClick={handleClickMenu}><li>Servizi</li></a>
                        <a href="#projects" onClick={handleClickMenu}><li>Portfolio</li></a>
                        <a href="#contacts" onClick={handleClickMenu}><li>Contatti</li></a>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;