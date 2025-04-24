import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import ImgLendo from './../assets/lendo.png'

export const Home = () => {
    return (
        <main>
            <section id='section-home'>
                <article>
                    <div>
                        <div className='wellcome'>
                            <span className="wellcome1">
                                sejam todos
                            </span>
                            <span className="wellcome2">
                                bem-vindos
                            </span>
                            <div ></div>
                            <div className="arrow-down">
                                <a href="#about"><FontAwesomeIcon icon={faChevronDown} /></a>
                            </div>
                        </div>
                    </div>
                </article>

                <article id='about'>
                    <div className='about-container'>
                        <div className='about-me'>

                            <h2>sobre mim</h2>

                            <div>

                                <h3>
                                    Olá..
                                </h3>
                                <p>
                                    Meu nome é Danyel e eu desenvolvo soluções web customizadas, priorizando interfaces de usuário intuitivas e responsivas. Minha expertise abrange o desenvolvimento front-end, com foco em <strong>React.js</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> e <strong>JavaScript</strong>, bem como back-end com <strong>Node.js</strong>, familiaridade com bancos de dados <strong>NoSQL</strong> como <strong>MongoDB</strong>, experiência no consumo e criação de <strong>APIs</strong>, e na implementação de testes unitários com <strong>Jest</strong>.
                                </p>
                                <p>
                                    Pode conferir um pouco mais do meu trabalho atravez dos links abaixo:
                                </p>
                                <div className='about-me-links'>
                                    <Link to='/projects'>Projetos</Link>
                                    <Link to='/experiences'>Experiências</Link>
                                </div>
                            </div>
                            <div className="arrow-down">
                                {/* <a href="#about"><FontAwesomeIcon icon={faChevronDown} /></a> */}
                            </div>
                        </div>
                    </div>
                </article>

                <article id='more-about'>
                    <p>..em breve, um pouco mais sobre mim.</p>
                </article>
            </section>
        </main>
    )
}