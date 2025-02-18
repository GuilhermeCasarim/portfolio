import { BiLogoTypescript, BiLogoTailwindCss, BiLogoGithub, BiLogoJavascript, BiLogoCss3 } from "react-icons/bi";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text: 'Linguagem de marcação de hipertexto' },
  { id: "css", name: "CSS3", icon: <BiLogoCss3 />
    , text: 'Linguagem de formatação' },
  { id: "js", name: "JavaScript", icon: <BiLogoJavascript className="js" />
    , text: 'Linguagem de programação' },
  { id: "tsx", name: "TypeScript", icon: <BiLogoTypescript />, text: 'Linguagem de programação baseada em Javascript e tipada' },
  { id: "react", name: "React", icon: <DiReact />, text: 'Framework Javascript utilizado para a criação de interfaces de usuário' },
  { id: "tailwind", name: "Tailwind", icon: <BiLogoTailwindCss />, text: 'Framework CSS utilizado para a criação de layouts personalizados' },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: 'JavaScript no lado do Servidor/BackEnd' },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, text: 'Linguagem de programação para administração no banco de dados' },
  { id: "github", name: "Github", icon: <BiLogoGithub />, text: 'Plataforma para controle de versão' }

];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
