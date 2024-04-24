import styles from './StylesModules/Sobre.module.css'

import { FaGithub,FaPython,FaReact, FaHtml5,FaCss3Alt,  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoCPlusPlus } from "react-icons/bi";

function Sobre() {
    return(
        <div id="about" className={styles.container}>
            <h1>Um pouco sobre mim</h1>
            <p>Exercitation in anim adipisicing aliqua velit et Lorem fugiat nulla ipsum veniam consequat pariatur Lorem. Ex aute veniam cillum aute tempor cupidatat tempor in ex. Laboris irure minim consectetur ad ipsum enim. Aliquip consectetur excepteur duis ea pariatur ex commodo incididunt tempor id consequat occaecat.</p>
            <h2>Tecnologias que ja utilizei</h2>
            <div className={styles.tech}>
                <nav>
                    <FaPython/>
                    <p>Python</p>
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
                    <FaCss3Alt/>
                    <p>CSS</p>
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