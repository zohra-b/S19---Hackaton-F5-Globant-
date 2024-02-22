import React from "react";
import homeimg from '../images/homeimg.png'
import '../homemain/homeMain.css'
import { FaSearch } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Tools from '../images/Tools.png'
import Plumbing from '../images/Plumbing.png'
import OpenParcel from '../images/Open-Parcel.png'
import Housekeeping from '../images/Housekeeping.png'
import Conflict from '../images/Conflict.png'
import image1 from '../images/image 1.png'
import image2 from '../images/image 2.png'
import image3 from '../images/image 3.png'
import image4 from '../images/image 4.png'




const HomeMain = () => {
    return (
        <section className="bodyhome">
            <div className="imghome">
                <img src={homeimg} alt="img home" />
            </div>
            <div className="search">
                <h1 className="textsearch">Busca una tarea</h1>
                <input
                    className="inputhome"
                    type="text"
                    placeholder="Escriba aquí el nombre de la tarea que desea..."
                />
                <div className="fasearch">
                    <FaSearch />
                </div>
            </div>
            <div className="iconshome">
                <a href="#"><img src={Tools} className="serviceicons" alt="tools" /></a>
                <a href="#"><img src={OpenParcel} className="serviceicons" alt="openparcel" /></a>
                <a href="#"><img src={Conflict} className="serviceicons" alt="conflict" /></a>
                <a href="#"><img src={Plumbing} className="serviceicons" alt="plumbing" /></a>
                <a href="#"><img src={Housekeeping} className="serviceicons" alt="housekeeping" /></a>

            </div>
            <div className="servicedescription">
                <p className="textservicedescription">DESCUBRE TALENTOS CON LAS HABILIDADES QUE NECESITAS</p>
                <section className="ability">
                    <div className="abilitysection">
                        <img src={image2} alt="electricgirld" />
                        <div className="cubedescription">
                            <p className="tittlecube">SE OFRECE  <span className="tittlespan"> ELECTRICISTA</span></p>
                            <div className="userdescription">
                                <FaUser />
                                <p >DANIELA M.</p>
                            </div>
                            <div className="usertext">
                                <p>Reparo averías eléctricas: salto automático del cuadro eléctrico, cambio de mecanismos, instalación de iluminación, etc.</p>
                            </div>
                            <div className="userdescription">
                                <FaStar />
                                <p >Añadir a favoritos</p>
                                <FaEnvelope />
                                <p >Contactar</p>
                            </div>
                            <div className="famapmarkeralt">
                                <FaMapMarkerAlt />
                                <p>GRANADA</p>
                            </div>
                        </div>

                    </div>
                    <div className="abilitysection">
                        <img src={image3} alt="clean" />
                        <div className="cubedescription">
                            <p className="tittlecube">SE OFRECE  <span className="tittlespan"> ELECTRICISTA</span></p>
                            <div className="userdescription">
                                <FaUser />
                                <p >JORGE A.</p>
                            </div>
                            <div className="usertext">
                                <p>Se ofrece servicio de limpieza por horas. Realizo limpieza a fondo del hogar, baños, cocina, cristales...</p>
                            </div>
                            <div className="userdescription">
                                <FaStar />
                                <p >Añadir a favoritos</p>
                                <FaEnvelope />
                                <p >Contactar</p>
                            </div>
                            <div className="famapmarkeralt">
                                <FaMapMarkerAlt />
                                <p>HUESCA</p>
                            </div>
                        </div>

                    </div>

                </section>
                <p className="textservicedescription">ENCUENTRA OPORTUNIDADES DE TRABAJO</p>
                <section className="opportunities">
                    <div className="opportunitysection">
                        <img src={image1} alt="electricgirld" />
                        <div className="cubedescription2">
                            <p className="tittlecube">SE BUSCA  <span className="tittlespan"> PINTOR</span></p>
                            <div className="userdescription">
                                <FaUser />
                                <p >FRANCISCO L.</p>
                            </div>
                            <div className="usertext">
                                <p>Buscamos pintor/a con experiencia para realizar trabajos de pintura en cuatro estancias. Ofrecemos pintura, herramientas y todo lo necesario.</p>
                            </div>
                            <div className="userdescription">
                                <FaStar />
                                <p >Añadir a favoritos</p>
                                <FaEnvelope />
                                <p >Contactar</p>
                            </div>
                            <div className="famapmarkeralt">
                                <FaMapMarkerAlt />
                                <p>MADRID</p>
                            </div>
                        </div>
                    </div>
                    <div className="opportunitysection">
                        <img src={image4} alt="clean" />
                        <div className="cubedescription2">
                            <p className="tittlecube">SE BUSCA  <span className="tittlespan"> FONTANERO</span></p>
                            <div className="userdescription">
                                <FaUser />
                                <p >LORENA R.</p>
                            </div>
                            <div className="usertext">
                                <p>Se precisa fontanero/a para reparación de avería en el lavabo del cuarto de baño. Se ofrecen todos los utensilios necesarios.</p>
                            </div>
                            <div className="userdescription">
                                <FaStar />
                                <p >Añadir a favoritos</p>
                                <FaEnvelope />
                                <p >Contactar</p>
                            </div>
                            <div className="famapmarkeralt">
                                <FaMapMarkerAlt />
                                <p>GIJÓN</p>
                            </div>
                        </div>
                    </div>




                </section>

            </div>

        </section>
    );
};

export default HomeMain;

