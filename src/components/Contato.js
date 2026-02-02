import styles from './StylesModules/Contato.module.css';
import Forms from './Forms';
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';


import { FaSquareGithub, FaSquareWhatsapp, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail,IoIosPerson } from "react-icons/io";
import { MdAlternateEmail,MdDriveFileRenameOutline,MdOutlineTitle } from "react-icons/md";
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
                            <span>
                                <p>E-mail</p>
                                <p className={styles.email}>matheushenrique612@gmail.com</p>
                            </span>
                            <div className={styles.copy}><CopyToClipboard text='matheushenrique612@gmail.com'><FaRegCopy /></CopyToClipboard></div>
                        </a>
                    </nav>
                    <nav>
                        <a href="https://www.linkedin.com/in/matheus-francisco-a5bb1a218/" target='_blank'>
                            <FaLinkedin />
                            <span>
                                <p>Linkedin</p>
                                <p>@matheus-francisco-a5bb1a218</p>
                            </span>
                        </a>
                    </nav>
                    <nav>
                        <a href="https://github.com/MatheusHAF" target='_blank'>
                            <FaSquareGithub />
                            <span>
                                <p>Github</p>
                                <p>@MatheusHAF</p>
                            </span>
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