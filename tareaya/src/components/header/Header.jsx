import "./header.css";
import treelog from '../images/treelog.png'


const Header = () => {
  return (
  <header className="header--container">
    <div className="header--LogoTitle--container">
        <img src={treelog}/>
        <h2 className="header--Title">TareaYa</h2>
    </div>
    <div className="header--Links--container">
        <ul className="header--list">
            <span className="background--addTask"><li>Añadir tarea</li></span>
            <li>Categorias</li>
            <li>Acceder/Registrarse</li>
        </ul>
    </div>
  </header>
)};

export default Header;