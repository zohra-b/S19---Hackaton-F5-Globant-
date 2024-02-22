import "./header.css";
import treelog from '../images/treelog.png'
import image5 from '../images/image 5.png'
import image6 from '../images/image 6.png'


const Header = () => {
  return (
  <>
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
  <nav className="nav--container">
    <ul className="nav--list">
      <li className="nav--tasks"><img src={image6}/> BUSCAR TAREA</li>
      <li className="nav--tasks"><img src={image5}/> OFRECER TAREA</li>
    </ul>
  </nav>
  </>
)};

export default Header;