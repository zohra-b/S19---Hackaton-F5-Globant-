import React from "react";
import homeimg from '../images/homeimg.png'
import '../homemain/homeMain.css'
import { FaSearch } from 'react-icons/fa'



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
            <img src="" alt="" />

        </div>
        
      </section>
    );
  };
  
  export default HomeMain;
  
