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
      <div className="main">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="container">
          <div className="textos-home">
            <h1 className="titulo">Um pouco sobre o projeto</h1>
            <p className="text">
              Esse site foi feito para o projeto final do curso da Gama Academy e a Ambev Tech.
              Foi extremamente desafiador todo o caminho mas muito gratificante.
              O intuito é criar um formulário que envie os dados dos candidatos para um banco de dados.
              Ainda, quero fazer algumas implementações no projeto, aparando pequenas arestas e adicionando outras funcionalidades.
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
      <footer className="footer-quem">
        <Footer />
      </footer>
    </div>
  );
}
export default QuemSomos;