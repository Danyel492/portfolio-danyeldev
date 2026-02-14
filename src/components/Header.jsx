import "./Header.css";
import logo from "./../assets/logo-danyeldev.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <NavLink to="/" style={{ textDecoration: "none", border: "none" }}>
          <img src={logo} alt="Logo" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
