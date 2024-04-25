import styles from './StylesModules/Contato.module.css';
import Forms from './Forms';
import React, {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


import { FaSquareGithub, FaSquareWhatsapp, FaLinkedin, FaSquareInstagram  } from "react-icons/fa6";
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
                        <FaSquareWhatsapp/>
                        <p>Whatsapp</p>
                        <div className={styles.copy}><CopyToClipboard text='+55(16)98848-1389'><FaRegCopy/></CopyToClipboard> </div>
                    </nav>
                    <nav>
                        <IoMdMail/>
                        <p>E-mail</p>
                        <div className={styles.copy}><CopyToClipboard text='matheushenrique612@gmail.com'><FaRegCopy/></CopyToClipboard></div>
                    </nav>
                    <nav>
                        <FaLinkedin/>
                        <p>Linkedin</p>
                    </nav>
                    <nav>
                        <FaSquareGithub/>
                        <p>Github</p>
                    </nav>
                    <nav>
                        <FaSquareInstagram/>
                        <p>Instagram</p>
                    </nav>
                </div>
                <div className={styles.right}>
                    <Forms/>
                </div>
            </div>
        </div>
    );
}

export default Contato;