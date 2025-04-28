import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export const Contact = () => {

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();
        const whatsappUrl = `https://wa.me/5518981280390?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main>
            <div>
                <h2>Escolha o meio de contato</h2>
                <div className='contactIcons'>
                    <a href="#whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="#email"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="#linkedin"><FontAwesomeIcon icon={faLinkedin} /> </a>
                    <a href="#github"><FontAwesomeIcon icon={faGithub} /> </a>
                </div>
            </div>
            <div className='contacts'>
                <div id='whatsapp' className='contact'>
                    <div>
                        <h3><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</h3>
                    </div>
                    <div>
                        <p>A maneira mais rápida de me contactar é pelo WhatsApp através do número: </p>
                        <span>
                            (18) 9 8128-0930
                        </span>
                        <p>Ou, para facilitar, pode digitar o que deseja e enviar direto para mim: </p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="whatsappMessage"
                                placeholder="Digite aqui sua mensagem: "
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
                <div id='email' className='contact'>
                    <div>

                        <h3><FontAwesomeIcon icon={faEnvelope} /> E-mail</h3>
                    </div>
                    <div>
                        <p>Você ainda pode preferir me mandar um email, caso seja mais conveniente.</p>
                        <span>
                            danyelguto@gmail.com
                        </span>
                        <p>Estou sempre de olho nas notificações, mas capriche no campo <b>ASSUNTO</b> para que eu avalie a urgênvia da sua mensagem pois provavelmente estou <i>codando</i> neste exato momento.</p>
                    </div>
                </div>
                <div id='linkedin' className='contact'>
                    <div>
                        <h3><FontAwesomeIcon icon={faLinkedin} /> Linkedin</h3>
                    </div>
                    <div>
                        <p>Se quiser conhecer um pouco mais da minha trajetória, conquistas e conexões, dá uma olhada no meu perfil no LinkedIn!</p>
                        <span>
                            <a href="https://www.linkedin.com/in/danyeldev/" target='_blank'>
                            <FontAwesomeIcon icon={faLink} /> in/danyeldev</a>
                        </span>
                        <p>Estou sempre aberto a boas conversas e oportunidades.</p>
                    </div>
                </div>
                <div id='github' className='contact'>
                    <div>
                        <h3> <FontAwesomeIcon icon={faGithub} /> GitHub</h3>
                    </div>
                    <div>
                        <p>
                        Curioso pra ver meus projetos? No meu GitHub você encontra o que venho codando por aí
                        </p>
                        <span>
                            <a href="https://github.com/Danyel492" target='_blank'>
                            <FontAwesomeIcon icon={faLink} /> @Danyel492</a>
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}