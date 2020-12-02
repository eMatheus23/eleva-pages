import React from 'react';

import logoElevagro from '../images/logos/marca-elevagro.svg';
import '../styles/components/footer.css'

function Footer() {
  return (
    <footer>
      <div>
        <p>© Todos os direitos reservados a</p>
        <img src={logoElevagro} alt='Elevagro' />
      </div>

      <div className='footer-links'>
        <a href='#'>Ajuda</a>
        <a href='#'>Termos de uso</a>
      </div>
  </footer>
  )
}

export default Footer;