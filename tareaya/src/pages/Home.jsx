import { useState } from 'react'
import Footer from '../components/footer/Footer';
import HomeMain from '../components/homemain/HomeMain';
import Header from '../components/header/Header';


function Home() {
    return (
      <div>
        <Header/>
        <HomeMain/>
        <Footer />
      </div>
    );
  }
  


export default Home;