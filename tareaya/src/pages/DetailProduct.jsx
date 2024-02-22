import { useState } from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Product from '../components/product/Product';


function DetailProduct() {
    return (
      <div>
        <Header/>
        <Product/>
        <Footer />
      </div>
    );
  }
  


export default DetailProduct;