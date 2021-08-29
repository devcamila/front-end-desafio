import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container" fixed-bottom='true' >
          <nav className="footer-nav">
            <ul className="footer-ul">            
              <li><a target="blank" href="https://github.com/devcamila">Github</a></li>
              <li><a target="blank" href="https://www.linkedin.com/in/camila-lacerda/">Linkedin</a></li>     
              <li><a target="blank" href="https://twitter.com/lacerda_cah">Twitter</a></li>
              <li><a target="blank" href="https://www.youtube.com/channel/UCFSSrdeDxKM_dN2nhym3W7Q">YouTube</a></li>                  
            </ul>
          </nav>
        
        </footer>
  );
}

export default Footer;