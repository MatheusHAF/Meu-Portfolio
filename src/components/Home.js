import styles from "./StylesModules/Home.module.css"
import { FaSquareGithub,FaLinkedin ,FaFileLines  } from "react-icons/fa6";

function Home() {
    return(
        <div id='Home' className={styles.container}>
            <nav>
                <p className={styles.ptop}>Olá 👋 me chamo Matheus</p>
                <div className={styles.middle}>
                    <p>Full-Stack</p>
                    <p className={styles.picons}>
                        <a href="https://github.com/MatheusHAF" target="_blank"><FaSquareGithub/></a>
                        <a href="https://www.linkedin.com/in/matheus-francisco-a5bb1a218/" target="_blank"><FaLinkedin/></a>
                        <a href="https://docs.google.com/document/d/1KOQpWFTzxla4UvnCnJPs_0ROCjG3KA0e0SXMCnW-IxY/edit?usp=sharing" target="_blank"><FaFileLines/></a>
                    </p>
                </div>
                <p className={styles.pbottom}>Developer</p>
            </nav>
        </div>
    )
}
export default Home