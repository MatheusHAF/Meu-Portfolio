import React, { useRef } from 'react';
import Styles from './StylesModules/Navbar.module.css';
import logo from '../images/logo.png';

// Importações do GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function NavbarMenu() {
    const headerRef = useRef(null);

    useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Anima o header
    tl.from(headerRef.current, { y: -100, opacity: 0, duration: 1 });

    // 2. Anima os itens da lista em cascata (estilo dominó)
    tl.from("li", { 
        y: 20, 
        opacity: 0, 
        stagger: 0.1, // 0.1s de intervalo entre cada item
        duration: 0.5 
    }, "-=0.5"); // Começa 0.5s antes da animação anterior terminar
}, { scope: headerRef });

    return (
        <header ref={headerRef} className={Styles.header}> 
            <div className={Styles.right}>
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <div className={Styles.left}>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contacts">Contato</a></li>
                </ul>
            </div>
        </header>
    );
}

export default NavbarMenu;