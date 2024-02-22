import React from "react";
import homeimg from '../images/homeimg.png'
import '../homemain/homeMain.css'
import { FaSearch } from 'react-icons/fa'
import Tools from '../images/Tools.png'
import Plumbing from '../images/Plumbing.png'
import OpenParcel from '../images/Open-Parcel.png'
import Housekeeping from '../images/Housekeeping.png'
import Conflict from '../images/Conflict.png'




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
        <h3 className="textservicedescription">DESCUBRE TALENTOS CON LAS HABILIDADES QUE NECESITAS</h3>
            <section className="ability">
                <img src="" alt="" />
                <div className="cubedescription">
                    <p className="textcubedescription"></p>
                </div>
                

            </section>
            <h3 className="textservicedescription">ENCUENTRA OPORTUNIDADES DE TRABAJO</h3>
            <section className="opportunities">
                

            </section>

        </div>
        
      </section>
    );
  };
  
  export default HomeMain;
  
