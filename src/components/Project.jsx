import React from "react";
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        nome: "CMS+",
        imagem: "/assets/tnCms.png",
        descricao: `Sistema completo gerenciamento de conteúdo que permite aos usuários criar, editar, visualizar e excluir postagens, além de funcionalidades exclusivas para administradores, como gerenciamento de usuários e moderação de conteúdo. O backend foi construído com Node.js, Express e MongoDB, enquanto o frontend utiliza React.js e Vite para uma interface moderna, responsiva e interativa. O projeto inclui autenticação de usuários, controle de permissões, design responsivo e integração total entre frontend e backend.`,
        tecnologias: ["React", "JavaScript", "Express", "Vite", "MongoDB", "Node.js", "API", "JWT", "CSS"],
        linkRepositorio: "https://github.com/Danyel492/cms",
        linkOnline: "http://cms.danyeldev.com/",
    },
    {
        nome: "Cadastro de Interesse",
        imagem: "./../assets/tnCadastroInteresse.png",
        descricao: `Desenvolvimento de duas páginas. Um linktree para colocar na bio do Instagram com todos os links disponíveis. Uma página para cadastro de interesse em curso online. Esse cadastro armazena as informações em um banco de dados para futuro contato sobre o curso.`,
        tecnologias: ["JavaScript", "MongoDB", "Node.js", "API", "HTML", "CSS"],
        linkRepositorio: "#",
        linkOnline: "https://maquiador360.vercel.app/",
    }, {
        nome: "Cardapio online",
        imagem: "./../assets/tnEspetaria.png",
        descricao: `(Cópia do projeto real) Desenvolvimento de uma plataforma online de pedidos para retirada. Sistema desenvolvido para Eduarda e Guilherme que conta com cardápio dispondo os produtos e valores, bem como a quantidade desejada. Ao final os valores são somados e enviados para o WhatsApp do estabelecimento (Mas esse arquivo por ser cópia, envia para o meu celular).`,
        tecnologias: ["HTML", "CSS", "JavaScript", "Tailwind", "API Whatsapp"],
        linkRepositorio: "https://github.com/Danyel492/espetinho-gui",
        linkOnline: "https://espetinho-gui.vercel.app/",
    },
];

const Project = () => {

    return (
        <div className="component-projects-container">
            {projects.map((project, index) => (
                <div className="container-project" key={index}>
                    <div>
                        <div className="banner-project" onClick={() => openModal(project)}>
                            <h2>{project.nome}</h2>
                            <img
                                src={project.imagem}
                                alt={`Imagem do projeto ${project.nome}`}
                                className="project-image"
                            />
                        </div>
                        <p>{project.descricao}</p>
                    </div>
                    <div>
                        <p className="technologies">
                            <strong>Tecnologias:</strong>
                            <div className="tech-list">
                                {project.tecnologias.map((tech, techIndex) => (
                                    <span className="tech-badge" key={techIndex}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </p>
                        <p className="btn-links">
                            <a href={project.linkRepositorio} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCode} /> Repositório
                            </a>
                            <a href={project.linkOnline} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGlobe} /> Online
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;