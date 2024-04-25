import styles from './StylesModules/Forms.module.css'
function Forms() {
    return(
        <div className={styles.container}>
            <h2>Me envie um e-mail</h2>
            <form>
                <nav>
                    <label>Nome: </label>
                    <input type="text" />
                </nav>
                <nav>
                    <label>E-mail: </label>
                    <input type="email" />
                </nav>
                <nav>
                    <label>Assunto: </label>
                    <input type="text" />
                </nav>
                <nav>
                    <label>Mensagem: </label>
                    <textarea cols="30" rows="10"></textarea>
                </nav>
                <input className={styles.btnsubmit} type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
export default Forms