import React from "react"
import './HardSkills.css'

const skills = [
    {
        nome: "React.js",
        imagem: "/assets/skills/react.png"
    }, {
        nome: "Tailwind",
        imagem: "/assets/skills/tailwind.png"
    }, {
        nome: "Bootstrap",
        imagem: "/assets/skills/bootstrap.png"
    }, {
        nome: "TypeScript",
        imagem: "/assets/skills/typescript.png"
    }, {
        nome: "JavaScript",
        imagem: "/assets/skills/js.png"
    }, {
        nome: "HTML",
        imagem: "/assets/skills/html5.png"
    }, {
        nome: "CSS",
        imagem: "/assets/skills/css3.png"
    }, {
        nome: "Jest",
        imagem: "/assets/skills/jest.png"
    }, {
        nome: "Node.JS",
        imagem: "/assets/skills/node.png"
    }, {
        nome: "MongoDB",
        imagem: "/assets/skills/mongodb.png"
    }, {
        nome: "Git",
        imagem: "/assets/skills/git.png"
    }, {
        nome: "GitHub",
        imagem: "/assets/skills/github.png"
    }, {
        nome: "Figma",
        imagem: "/assets/skills/figma.png"
    }, {
        nome: "Photoshop",
        imagem: "/assets/skills/photoshop.png"
    }, {
        nome: "Premiere",
        imagem: "/assets/skills/premiere.png"
    }, {
        nome: "Office",
        imagem: "/assets/skills/office.png"
    }
]

export const HardSkills = () => {


    return (
        <div className="container-skills">
            {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                    <div>
                        <img
                            src={skill.imagem}
                            alt={`Imagem da skill ${skill.nome}`}
                            className="skill-logo"
                        />
                    </div>
                    <span>
                        {skill.nome}
                    </span>
                </div>
            ))}
        </div>
    )
}