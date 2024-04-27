import styles from './StylesModules/Forms.module.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Forms() {
    const [name,setName] = useState('')
    const [assunto,setAssunto] = useState('')
    const [email,setEmail] = useState('')
    const [mensage,setMessage] = useState('')
    function sendEmail(e) {
        e.preventDefault();
        if (name === '' || assunto === '' || email === '' || mensage === '') {
            alert("Por favor, preencha todos os campos");
            console.log(email,name,mensage,assunto);
            return;
        }
        const templateParams = {
            from_name: name,
            message: mensage,
            assunto: assunto,
            email: email
        }
        emailjs.send("service_i1uz68a","template_cgb8sbs",templateParams,"8rTtQx4DOl8bwgztw")
        .then((response) => {
            console.log("Email enviado",response.status, response.text)
            alert('E-mail Enviado, Obrigado pelo contato!')
            setName('')
            setAssunto('')
            setEmail('')
            setMessage('')
        },(err)=>{
            console.log("Erro: ",err)
        })
    }
    return(
        <div className={styles.container}>
            <h2>Me envie um e-mail</h2>
            <form onSubmit={sendEmail}>
                <nav>
                    <label>Nome: </label>
                    <input type="text" 
                    placeholder='Digite seu nome'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}/>
                </nav>
                <nav>
                    <label>E-mail: </label>
                    <input type="email"  
                    placeholder='Digite seu e-mail'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}/>
                </nav>
                <nav>
                    <label>Assunto: </label>
                    <input type="text"
                     placeholder='Digite o assunto' 
                     onChange={(e)=>setAssunto(e.target.value)}
                    value={assunto}/>
                </nav>
                <nav>
                    <label>Mensagem: </label>
                    <textarea cols="30" 
                    rows="10"
                    onChange={(e)=>setMessage(e.target.value)}
                    value={mensage}></textarea>
                </nav>
                <input className={styles.btnsubmit} type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
export default Forms