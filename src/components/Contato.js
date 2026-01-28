import styles from './StylesModules/Contato.module.css';
import Forms from './Forms';
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';


import { FaSquareGithub, FaSquareWhatsapp, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";

function Contato() {

    return (
        <div id='contacts' className={styles.container}>
            <h1>Entre em contato comigo!</h1>
            <div className={styles.divs}>
                <div className={styles.left}>
                    <h2>Minhas redes sociais</h2>
                    <nav>
                        <a href="#contacts">
                            <IoMdMail />
                            <p>E-mail</p>
                            <div className={styles.copy}><CopyToClipboard text='matheushenrique612@gmail.com'><FaRegCopy /></CopyToClipboard></div>
                        </a>
                    </nav>
                    <nav>
                        <a href="https://www.linkedin.com/in/matheus-francisco-a5bb1a218/" target='_blank'>
                            <FaLinkedin />
                            <p>Linkedin</p>
                        </a>
                    </nav>
                    <nav>
                        <a href="https://github.com/MatheusHAF" target='_blank'>
                            <FaSquareGithub />
                            <p>Github</p>
                        </a>
                    </nav>
                </div>
                <div className={styles.right}>
                    <Forms />
                </div>
            </div>
        </div>
    );
}

export default Contato;