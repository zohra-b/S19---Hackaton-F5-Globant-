import React from "react";
import homeimg from '../images/homeimg.png'
import '../homemain/homeMain.css'
import { FaSearch } from 'react-icons/fa'
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
            <img src={Tools} className="serviceicons" alt="tools" />
            <img src={OpenParcel}className="serviceicons" alt="openparcel" />
            <img src={Conflict} className="serviceicons" alt="conflict" />
            <img src={Plumbing} className="serviceicons" alt="plumbing" />
            <img src={Housekeeping} className="serviceicons" alt="housekeeping" />

        </div>
        <div className="servicedescription">
        <p className="textservicedescription">DESCUBRE TALENTOS CON LAS HABILIDADES QUE NECESITAS</p>
            <section className="ability">
                <div className="abilitysection">
                <img src={image2} alt="electricgirld" />
                <div className="cubedescription">
                <p className="tittlecube">SE OFRECE  <span className="tittlespan"> ELECTRICISTA</span></p>
                </div>
                </div>
                <div className="abilitysection">
                <img src={image3} alt="clean" />
                <div className="cubedescription">
                    <p className="tittlecube">SE OFRECE  <span className="tittlespan"> LIMPIADOR</span></p>
                    
                </div>
                </div>

            </section>
            <p className="textservicedescription">ENCUENTRA OPORTUNIDADES DE TRABAJO</p>
            <section className="opportunities">
            <div className="opportunitysection">
                <img src={image1} alt="electricgirld" />
                <div className="cubedescription2">
                <p className="tittlecube">SE BUSCA  <span className="tittlespan"> PINTOR</span></p>
                </div>
                </div>
                <div className="opportunitysection">
                <img src={image4} alt="clean" />
                <div className="cubedescription2">
                <p className="tittlecube">SE BUSCA  <span className="tittlespan"> FONTANERO</span></p>
                </div>
                </div>


                

            </section>

        </div>
        
      </section>
    );
  };
  
  export default HomeMain;
  
