import React from 'react';

import logoElevagroFooter from '../images/logos/marca-footer.svg';

//CSS
import '../styles/components/header-create-account.css';

// Flags
import brazilFlag from '../images/flags/brazil.svg'
import spainFlag from '../images/flags/spain.svg'
import usaFlag from '../images/flags/usa.svg'

function HeaderCreateAccount () {
  return (
      <header>
        <img src={logoElevagroFooter} alt='Elevagro' />

        <div className="languages-selector">
          <a href="#">
            <img className="active" src={brazilFlag} alt="Mudar para Português"/>
          </a>

          <a href="#">
            <img src={spainFlag} alt="Mudar para Espanhol"/>
          </a>

          <a href="#">
            <img src={usaFlag} alt="Mudar para Inglês"/>
          </a>
          
        </div>
      </header>
  );
}

export default HeaderCreateAccount;