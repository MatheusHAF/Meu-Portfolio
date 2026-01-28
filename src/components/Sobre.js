import styles from './StylesModules/Sobre.module.css'

import { FaGithub,FaPython,FaReact,FaGitAlt,FaJava} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";

function Sobre() {
    return(
        <div id="about" className={styles.container}>
            <h1>Um pouco sobre mim</h1>
            <p>
            Olá! Me chamo Matheus, tenho 25 anos e sou técnico em Informática, formado pelo IFSP (2016–2019), onde descobri minha paixão por programação.
            Atualmente, curso Engenharia da Computação na Unicamp, onde também colaboro em um projeto de extensão sobre autogestão e cooperativas populares.
             Além disso, realizo freelances e me dedico a projetos pessoais, sempre buscando aprimorar minhas habilidades e explorar novas tecnologias.
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
                    <FaJava/>
                    <p>Java</p>
                </nav>
                <nav>
                    <IoLogoJavascript/>
                    <p>JavaScript</p>
                </nav>
                <nav>
                    <FaGithub/>
                    <p>Github</p>
                </nav>
            </div>
        </div>
    )
}
export default Sobre