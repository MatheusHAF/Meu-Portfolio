import React from 'react'
import Styles from './StylesModules/Navbar.module.css'
import logo from '../images/logo.png'
function NavbarMenu() {
    return(
        <header>
            <div className={Styles.right}><img src={logo} alt="logo" /></div>
            <div className={Styles.left}>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contacts">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}
export default NavbarMenu