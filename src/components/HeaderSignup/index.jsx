import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoElevagro from '../../assets/logos/marca-elevagro.svg';

// Flags
import brazilFlag from '../../assets/flags/brazil.svg';
import spainFlag from '../../assets/flags/spain.svg';
import usaFlag from '../../assets/flags/usa.svg';

const HeaderSignup = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt-br');

  return (
    <header className="header-signup">
      <Link to="/">
        <img src={logoElevagro} alt="Elevagro" />
      </Link>

      <div className="languages-selector">
        <img
          className={selectedLanguage === 'pt-br' ? 'active' : ''}
          src={brazilFlag}
          alt="Mudar para Português"
          onClick={() => setSelectedLanguage('pt-br')}
        />

        <img
          className={selectedLanguage === 'es' ? 'active' : ''}
          src={spainFlag}
          alt="Mudar para Espanhol"
          onClick={() => setSelectedLanguage('es')}
        />

        <img
          className={selectedLanguage === 'en' ? 'active' : ''}
          src={usaFlag}
          alt="Mudar para Inglês"
          onClick={() => setSelectedLanguage('en')}
        />
      </div>
    </header>
  );
};

export default HeaderSignup;
