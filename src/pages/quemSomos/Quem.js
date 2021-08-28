import React from 'react'
import './Quem.css';
import Header from '../../componentes/cabecalho/Header';
import Navbar from '../../componentes/navbar/Navbar';
import Footer from '../../componentes/rodape/Footer';



function QuemSomos() {
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
            <p className="text">
              Prencha seu dados para se registrar em nosso banco de talentos. Surgindo uma vaga com seu perfil, entraremos em contato.
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default QuemSomos;