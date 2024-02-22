import React from "react";
import image7 from '../images/image 7.png'
import '../product/product.css'
import conflict from '../images/Conflict.png'
import { FaStar } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
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

                    <div id="overlay"></div>
                    <div id="popup-form">
                        <form className="professionalform">
                            <label for="name">Nombre:</label>
                            <input type="text" id="name" name="name" required />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label for="phone">Teléfono:</label>
                            <input type="tel" id="phone" name="phone" required />

                            <label for="message">Mensaje:</label>
                            <input className="textarea" type="textarea" id="message" name="message" required />

                            <label>
                                <input type="checkbox" id="accept-policy" name="accept-policy" required />
                                Acepto las condiciones de uso y la política de privacidad.
                            </label>
                            <Link to="/Home" style={{ textDecoration: 'none', color: '#1A3750' }}>
                                <button className="buttonform" type="submit">Enviar</button>
                            </Link>
                        </form>
                    </div>
                </section>
            </div>
            <div className="sectiondescription">
                <h1>Perfil</h1>
                <p className="pdescription">Como profesional del mundo de la electricidad, mi objetivo es mejorar la calidad de vida de las personas a través de un servicio eléctrico seguro y eficiente. </p>
                <h1>Habilidades y Experiencia</h1>
                <p className="pdescription">Mi experiencia de más de una década en el campo eléctrico me ha equipado con un amplio conjunto de habilidades y un profundo conocimiento técnico. Ya sea que necesites una simple reparación o una instalación eléctrica completa, estoy aquí para proporcionarte una solución efectiva.</p>
                <h1>Opiniones</h1>
                <div className="consumer">
                    <div className="consumer1">
                        <div className="farusercircle">
                            <FaUserCircle />
                        </div>
                        <div className="consumerdescrip">
                            <h1>MARÍA G.</h1>
                            <div className="starconsumer">
                                <FaStar />
                                <h2>5.0</h2>
                                <h2>Feb 6,2024 </h2>
                            </div>
                            <p className="textconsumer">Excelente servicio. superó todas mis expectativas.</p>
                        </div>

                    </div>
                    <div className="consumer1">
                        <div className="farusercircle">
                            <FaUserCircle />
                        </div>
                        <div className="consumerdescrip">
                            <h1>JESÚS H.</h1>
                            <div className="starconsumer">
                                <FaStar />
                                <h2>4.5</h2>
                                <h2>ABRIL 21,2023 </h2>
                            </div>
                            <p className="textconsumer">Rápida y eficiente. Realizó todo el trabajo a la perfección. Definitivamente la volvería a contratar.</p>

                        </div>

                    </div>

                </div>
            </div>



        </>

    );

};

export default Product;