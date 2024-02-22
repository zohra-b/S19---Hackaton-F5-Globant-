import React from 'react';
import './footer.css';
import Facebook from '../images/Facebook.png';
import Instagram from '../images/Instagram.png';
import LinkedIn from '../images/LinkedIn.png';
import YouTube from '../images/YouTube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h2 className="title">Explora</h2>
        <ul className="list">
          <li><a href="#">Hazte tasker</a></li>
          <li><a href="#">Servicios por localización</a></li>
          <li><a href="#">Servicios por categoría</a></li>
          <li><a href="#">Usuario premiun</a></li>
          <li><a href="#">Todos los servicios</a></li>
          <li><a href="#">Ayuda</a></li>
        </ul>
      </div>
      <div className="column">
        <h2 className="title">Sobre nosotros</h2>
        <ul className="list">
          <li><a href="#">Quiénes somos</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Condiciones & Privacidad</a></li>
          <li><a href="#">Contacta</a></li>
          <li><a href="#">Prensa</a></li>
        </ul>
      </div>
      <div className="socials">
        <p className="socials-text">¿Aburrido? ¡Nuestras redes sociales son la solución!</p>
        <div className="icons">
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
            <a href="#"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="#"><img src={YouTube} alt="YouTube" /></a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 TareaYa</p>
      </div>
    </footer>
  );
};

export default Footer;