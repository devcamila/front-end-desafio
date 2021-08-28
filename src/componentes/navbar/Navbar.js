import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
      <div className="nav-container">
        <nav className="nav">
          <ul className="nav-ul" style={{ listStyleType: "none" }}>
              {/* HOME */}
              <li className="nav-li">
              <NavLink exact to = '/'

              style={{
                background:'#ffffff',
                padding: '10px 59.5px',
                color: '#231F20',
              }} 
          
              activeStyle={{
                backgroundColor:'#9AB48F',
                color: '#fff'    
            }}> Home       
              </NavLink>
              </li>

            {/*VAGAS*/}
             <li className="nav-li">
              <NavLink to = '/vagas'
              style={{
                background:'#ffffff',
                padding: '10px 60px',
                color: '#231F20'
              }} 
              activeStyle={{
                backgroundColor:'#9AB48F',
                color: '#fff'    
            }}> Vagas         
              </NavLink>
              </li>

            {/*CV*/}
            <li className="nav-li">
              <NavLink to = '/curriculo'
              style={{
                background:'#ffffff',
                padding: '10px 43px',
                color: '#231F20'
              }} 
              activeStyle={{
                backgroundColor:'#9AB48F',
                color: '#fff'    
            }}             
            > Candidatar
            </NavLink>
              </li>

              {/*QUEM SOMOS*/}
              <li className="nav-li">
              <NavLink to = '/quem-somos'
              style={{
                background:'#ffffff',
                padding: '10px 36px',
                color: '#231F20',
               ':active': {
                 color:'red'
                }
              }} 
              activeStyle={{
                backgroundColor:'#9AB48F',
                color: '#fff'    
            }}> Quem Somos        
              </NavLink>
              </li>

              {/*FALE CONOSCO*/}
             <li className="nav-li">
              <NavLink to = '/fale-conosco'
              style={{
                background:'#ffffff',
                padding: '10px 53px',
                color: '#231F20'
              }} 
              activeStyle={{
                backgroundColor:'#9AB48F',
                color: '#fff'               
            }}         
             > Contato      
              </NavLink>
              </li>
          </ul>
        </nav>
      </div>
  );
}

export default Navbar;

// style={{background:'#ffffff'}} activeStyle={{background:'#9AB48F'}}
