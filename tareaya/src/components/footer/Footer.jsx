import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h2 className="title">Explora</h2>
        <ul className="list">
          <li>Hazte tasker</li>
          <li>Servicios por localización</li>
          <li>Servicios por categoría</li>
          <li>Usuario premiun</li>
          <li>Todos los servicios</li>
          <li>Ayuda</li>
        </ul>
      </div>
      <div className="column">
        <h2 className="title">Sobre nosotros</h2>
        <ul className="list">
          <li>Quiénes somos</li>
          <li>Noticias</li>
          <li>Condiciones & Privacidad</li>
          <li>Contacta</li>
          <li>Prensa</li>
        </ul>
      </div>
      <div className="socials">
        <p className="socials-text">¿Aburrido? ¡Nuestras redes sociales son la solución!</p>
        <div className="icons">
            <img src="../images/Facebook.png" alt="Facebook" />
            <img src="../images/Instagram.png" alt="Instagram" />
            <img src="../images/LinkedIn.png" alt="LinkedIn" />
            <img src="../images/YouTube.png" alt="YouTube" />
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 TareaYa</p>
      </div>
    </footer>
  );
};

export default Footer;
