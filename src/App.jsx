import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" 

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Footer';

const App = () => {
  return (
    <> 
 

   <Navbar/>
   <Header/>
   <Footer/>
    </>
  )
}

export default App
// switch chai like localjost:300 KO PAXADI /about page haru many pages lai sigle page ma dekhauna ko lagi
