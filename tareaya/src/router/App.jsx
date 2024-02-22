// import { useState } from 'react'
import './App.css'
import Home from '../pages/Home'
import DetailProduct from '../pages/DetailProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='home'>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DetailProduct" element={<DetailProduct />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}



export default App
