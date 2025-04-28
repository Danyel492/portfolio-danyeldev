import React from "react";
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        nome: "CMS+",
        imagem: "/assets/thumbnail/tnCms.png",
        descricao: "Sistema completo gerenciamento de conteúdo que permite aos usuários criar, editar, visualizar e excluir postagens, além de funcionalidades exclusivas para administradores, como gerenciamento de usuários e moderação de conteúdo. O backend foi construído com Node.js, Express e MongoDB, enquanto o frontend utiliza React.js e Vite para uma interface moderna, responsiva e interativa. O projeto inclui autenticação de usuários, controle de permissões, design responsivo e integração total entre frontend e backend.",
        tecnologias: ["React", "JavaScript", "Express", "Vite", "MongoDB", "Node.js", "API", "JWT", "CSS"],
        linkRepositorio: "https://github.com/Danyel492/cms",
        linkOnline: "http://cms.danyeldev.com/",
    },
    {
        nome: "Cadastro de Interesse",
        imagem: "./../assets/thumbnail/tnCadastroInteresse.png",
        descricao: "Desenvolvimento de duas páginas. Um linktree para colocar na bio do Instagram com todos os links disponíveis. Uma página para cadastro de interesse em curso online. Esse cadastro armazena as informações em um banco de dados para futuro contato sobre o curso. Criei um back-end simples com Node.js para a criação de uma API onde armazena os dados de pessoas interessada no curso online da maquiadora utilizando o MongoDB. Esse dados são armazenado no Atlas.",
        tecnologias: ["JavaScript", "MongoDB", "Node.js", "API", "HTML", "CSS"],
        linkRepositorio: "#",
        linkOnline: "https://maquiador360.vercel.app/",
    }, {
        nome: "Cardapio online",
        imagem: "./../assets/thumbnail/tnEspetaria.png",
        descricao: "(Cópia do projeto real) Desenvolvimento de uma plataforma online de pedidos para retirada. Sistema desenvolvido para Eduarda e Guilherme que conta com cardápio dispondo os produtos e valores, bem como a quantidade desejada. Ao final os valores são somados e enviados para o WhatsApp do estabelecimento (Mas esse arquivo por ser cópia, envia para o meu celular).",
        tecnologias: ["HTML", "CSS", "JavaScript", "Tailwind", "API Whatsapp"],
        linkRepositorio: "https://github.com/Danyel492/espetinho-gui",
        linkOnline: "https://espetinho-gui.vercel.app/",
    }, {
        nome: "Pokedex API",
        imagem: "./../assets/thumbnail/tnPokeapi.png",
        descricao: "Este é um projeto de Pokedex desenvolvido com React. Ele permite que os usuários pesquisem e visualizem informações sobre diferentes Pokémons, além de marcar seus Pokémons favoritos. Foi desenvolvido como forma de estudo de Fetch API e Context API",
        tecnologias: ["React", "Context API", "Fetch API", "CSS", "API"],
        linkRepositorio: "https://github.com/Danyel492/pokedex-project",
        linkOnline: "https://pokedex-project-chi.vercel.app/",
    }, {
        nome: "Registro de Tarefas",
        imagem: "./../assets/thumbnail/tnRegistro.png",
        descricao: "Aplicação desenvolvida para atender a necessidade de registrar as tarefas realizadas pelos funcionários durante o expediente, gerando relatórios para os supervisores ao final do dia. Apesar de existirem soluções prontas no mercado, optei por criar esta aplicação para aprimorar minhas habilidades de programação.",
        tecnologias: ["HTML", "CSS", "JavaScript", "DOM"],
        linkRepositorio: "https://github.com/Danyel492/registro_tarefas",
        linkOnline: "https://danyel492.github.io/registro_tarefas/",
    }, {
        nome: "Calculadora",
        imagem: "./../assets/thumbnail/tnCalculadora.png",
        descricao: "Uma aplicação de calculadora simples e funcional desenvolvida para realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão. Este projeto foi criado com o objetivo de praticar manipulação do DOM e lógica de programação utilizando JavaScript, HTML e CSS.",
        tecnologias: ["HTML", "CSS", "JavaScript", "DOM"],
        linkRepositorio: "https://github.com/Danyel492/calculadora",
        linkOnline: "https://calculadora-tan.vercel.app/",
    }
];

const Project = ({ limit }) => {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="component-projects-container">
            {displayedProjects.map((project, index) => (
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
                        <div className="technologies">
                            <strong>Tecnologias:</strong>
                            <div className="tech-list">
                                {project.tecnologias.map((tech, techIndex) => (
                                    <span className="tech-badge" key={techIndex}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
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