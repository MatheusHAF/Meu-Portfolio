import styles from "./StylesModules/Contato.module.css";
import Forms from "./Forms";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail, IoMdCloudDownload } from "react-icons/io";

import { FaInstagramSquare } from "react-icons/fa";

function Contato() {
  const [copiado, setCopiado] = useState(false);
  return (
    <div id="contacts" className={styles.container}>
      <h1>Entre em contato comigo!</h1>
      <div className={styles.divs}>
        <div className={styles.left}>
          <h2>Minhas redes</h2>
          <nav>
            <CopyToClipboard
              text="matheushenrique612@gmail.com"
              onCopy={() => {
                setCopiado(true);
                setTimeout(() => setCopiado(false), 2000);
              }}
            >
              <div className={styles.copyNav} role="button" tabIndex={0}>
                <IoMdMail />
                <span>
                  <p>E-mail</p>
                  <p className={styles.secondp}>
                    {copiado ? "Copiado!" : "matheushenrique612@gmail.com"}
                  </p>
                </span>
              </div>
            </CopyToClipboard>
          </nav>
          <nav>
            <a
              href="https://www.linkedin.com/in/matheus-francisco-a5bb1a218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>
                <p>Linkedin</p>
                <p className={styles.secondp}>@matheus-francisco-a5bb1a218</p>
              </span>
            </a>
          </nav>
          <nav>
            <a
              href="https://github.com/MatheusHAF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
              <span>
                <p>Github</p>
                <p className={styles.secondp}>@MatheusHAF</p>
              </span>
            </a>
          </nav>
          <nav>
            <a
              href="https://www.instagram.com/matheus.haf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
              <span>
                <p>Instagram</p>
                <p className={styles.secondp}>@suec.mh</p>
              </span>
            </a>
          </nav>
          <nav>
            <a
              href="https://docs.google.com/document/d/1KOQpWFTzxla4UvnCnJPs_0ROCjG3KA0e0SXMCnW-IxY/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn_download}
            >
              <IoMdCloudDownload />
              Baixar Currículo (PDF)
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
