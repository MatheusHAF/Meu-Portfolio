import styles from './StylesModules/Sobre.module.css'

import { FaGithub,FaPython,FaReact, FaHtml5 , FaGitAlt, FaWordpress  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

function Sobre() {
    return(
        <div id="about" className={styles.container}>
            <h1>Um pouco sobre mim</h1>
            <p>
            Olá! Sou o Matheus, tenho 24 anos e sou graduando em Computação na Universidade Estadual de Campinas (Unicamp).
            Concluí o curso técnico em Informática pelo IFSP (2016-2019), onde descobri minha paixão por programação.
            Atualmente, trabalho como secretário administrativo em uma escola de futebol,
            realizo freelances e me dedico a projetos pessoais, sempre buscando aprimorar minhas habilidades e explorar novas tecnologias.
                
            </p>
            <h2>Tecnologias que já utilizei</h2>
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
                <nav>
                    <TbApi />
                    <p>API's</p>
                </nav>
                <nav>
                    <FaWordpress />
                    <p>Wordpress</p>
                </nav>
            </div>
        </div>
    )
}
export default Sobre