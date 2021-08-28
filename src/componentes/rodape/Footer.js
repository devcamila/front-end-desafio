import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container" fixed-bottom='true' >
          <nav className="footer-nav">
            <ul className="footer-ul">
              <li><a target="blank" href="https://github.com/devcamila">Instagram</a></li>
              <li><a target="blank" href="https://github.com/devcamila">Twitter</a></li>
              <li><a target="blank" href="https://github.com/devcamila">Github</a></li>
              <li><a target="blank" href="https://github.com/devcamila">Linkedin</a></li>                       
            </ul>
          </nav>
        
        </footer>
  );
}

export default Footer;