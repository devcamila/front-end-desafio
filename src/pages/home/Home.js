import React from 'react'
import './Home.css';

import Header from '../../componentes/cabecalho/Header';
import Navbar from '../../componentes/navbar/Navbar';
import Footer from '../../componentes/rodape/Footer';

import Gama from './logosEmpresas/Gama.png'
import AmbevTech from './logosEmpresas/AmbevTech.png'
import fic1 from './logosEmpresas/fic1.png'
import fic2 from './logosEmpresas/fic2.png'
import fic3 from './logosEmpresas/fic3.png'
import devCamila from './logosEmpresas/devCamila.png'

function Home() {
  return (
    <div className="page-home">
      <header className="header-home">
        <Header />
      </header>
      <div className="main-home">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="container-home">
          <div className="textos-home">
            <h1 className="titulo">Empresas Parceiras</h1>
          </div>
          <div className="imagens">
          <img src={Gama} alt="Log Gama Acaemy" className="imag-Gama" />
          <img src={fic3} alt="Logo fic3" className="img-fic3" />
          <img src={AmbevTech} alt="Logo AmbevTech" className="img-AmbevTech" />   
          </div>
          <div className="imagens"> 
          <img src={fic1} alt="Logo fic1" className="img-fic1" /> 
          <img src={devCamila} alt="Logo devCamila" className="img-devCamila" />
          <img src={fic2} alt="Logo fic2" className="img-fic2" /> 
          </div>
      </div>
      </div>
    <footer>
     <Footer/>
    </footer>
  </div>

  );
}

export default Home;


