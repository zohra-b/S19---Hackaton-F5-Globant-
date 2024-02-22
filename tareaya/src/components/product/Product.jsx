import React from "react";
import image7 from '../images/image 7.png'
import '../product/product.css'
import conflict from '../images/Conflict.png'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <div className="cont">
                <section className="professional">
                    <img src={image7} alt="img professional" />
                </section>
                <section className="infoprofessional">
                    <div className="jobandprice">
                        <div>
                            <h1>DANIELA M.</h1>
                            <div className="job">
                                <img src={conflict} alt="" />
                                <p>electricidad</p>
                            </div>
                        </div>
                        <div>
                            <h1>24€/h</h1>
                        </div>
                    </div>
                    <div className="star">
                        <FaStar />
                        <p>4,8 (14 Opiniones)</p>
                    </div>
                    <a href="#popup-form">
                    <button className="buttonproduct">Seleccionar y Continuar</button>
                    </a>

                </section>
            </div>
            
            <div id="overlay"></div>
            <div id="popup-form">
                <form className="professionalform">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" required/>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required/>

                            <label for="phone">Teléfono:</label>
                            <input type="tel" id="phone" name="phone" required/>

                                <label for="message">Mensaje:</label>
                                <input className="textarea" type="textarea" id="message" name="message" required/>

                                <label>
                                    <input type="checkbox" id="accept-policy" name="accept-policy" required/>
                                        Acepto las condiciones de uso y la política de privacidad.
                                </label>
                                <Link to="/Home" style={{ textDecoration: 'none', color:  '#1A3750' }}>
                                <button className="buttonform" type="submit">Enviar</button>
                                </Link>
                            </form>
                        </div>


                    </>

                    );

};

                    export default Product;