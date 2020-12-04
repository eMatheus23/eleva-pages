import React from 'react';
import { Link } from 'react-router-dom'

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
        <Link to='#'>Ajuda</Link>
        <Link to='#'>Termos de uso</Link>
      </div>
  </footer>
  )
}

export default Footer;