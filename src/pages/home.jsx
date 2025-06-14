import './home.css'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { HardSkills } from '../components/HardSkills';
import Project from '../components/Project';
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
                                    <a
                                        href="#projects"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Projetos
                                    </a>
                                    <Link to='https://drive.google.com/file/d/19tvlDO0vXj140yy-fXLlSBKuwFmY7pCX/view?usp=drive_link' target='_brank'>CV</Link>
                                </div>
                            </div>
                            <div className="arrow-down">
                                {/* <a href="#about"><FontAwesomeIcon icon={faChevronDown} /></a> */}
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <div className='skills-container'>

                        <h2>Skills</h2>

                        <div>
                            <HardSkills />
                        </div>

                    </div>
                </article>

                <article id="projects" className='projects-container'>
                    <h2>Projetos</h2>
                    <Project limit={4} />
                    <div className="projects-links">
                        <Link to="/projects">Ver todos os projetos</Link>
                    </div>
                </article>
            </section>
        </main>
    )
}