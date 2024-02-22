import "./header.css";

const Header = () => {
  return (
  <>
  <header className="header--container">
    <div className="header--LogoTitle--container">
        <img src="src/components/images/LogoArbol.png"/>
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
      <li className="nav--tasks"><img src="src/components/images/icon_search_task.png"/> BUSCAR TAREA</li>
      <li className="nav--tasks"><img src="src/components/images/icon_offer_task.png"/> OFRECER TAREA</li>
    </ul>
  </nav>
  </>
)};

export default Header;
