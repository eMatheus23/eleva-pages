import React from 'react';

import logoElevagroFooter from '../images/logos/marca-footer.svg';
import '../styles/components/footer.css'

function Footer() {
  return (
    <footer>
      <div>
        <p>© Todos os direitos reservados a</p>
        <img src={logoElevagroFooter} alt='Elevagro' />
      </div>

      <div className='footer-links'>
        <a href='#'>Ajuda</a>
        <a href='#'>Termos de uso</a>
      </div>
  </footer>
  )
}

export default Footer;