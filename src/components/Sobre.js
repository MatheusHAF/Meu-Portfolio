import styles from './StylesModules/Sobre.module.css'

import { FaGithub,FaPython,FaReact, FaHtml5,FaPhp , FaGitAlt  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoCPlusPlus } from "react-icons/bi";

function Sobre() {
    return(
        <div id="about" className={styles.container}>
            <h1>Um pouco sobre mim</h1>
            <p>
                Olá, Sou o Matheus e tenho 23 anos. Atualmente sou granduando em Ciência Computação pela Universidade Estadual de Campinas (Unicamp) e já me formei em Técnico em Informática em 2019 pelo IFSP, onde me apaixonei por programação.
                
            </p>
            <h2>Tecnologias que ja utilizei</h2>
            <div className={styles.tech}>
                <nav>
                    <FaPython/>
                    <p>Python</p>
                </nav>
                <nav>
                    <FaGitAlt/>
                    <p>Git</p>
                </nav>
                <nav>
                    <FaReact/>
                    <p>React</p>
                </nav>
                <nav>
                    <BiLogoCPlusPlus/>
                    <p>Linguagem C</p>
                </nav>
                <nav>
                    <FaHtml5/>
                    <p>HTML5</p>
                </nav>
                <nav>
                    <FaGithub/>
                    <p>Github</p>
                </nav>
                <nav>
                    <IoLogoJavascript/>
                    <p>JavaScript</p>
                </nav>
            </div>
        </div>
    )
}
export default Sobre