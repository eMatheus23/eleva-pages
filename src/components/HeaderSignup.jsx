import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoElevagro from '../images/logos/marca-elevagro.svg';

//CSS
import '../styles/components/header-signup.css';

// Flags
import brazilFlag from '../images/flags/brazil.svg'
import spainFlag from '../images/flags/spain.svg'
import usaFlag from '../images/flags/usa.svg'

export default function HeaderSignup () {
  const [selectedLanguage, setSelectedLanguage] = useState('pt-br');

  return (
      <header className="header-signup">
        <Link to={'/'}>
          <img src={logoElevagro} alt='Elevagro' />
        </Link>
        
        <div className="languages-selector">
          <img 
            className={selectedLanguage === 'pt-br' ? 'active': ''}
            src={brazilFlag} 
            alt="Mudar para Português"
            onClick={() => setSelectedLanguage('pt-br')}
          />

          <img 
            className={selectedLanguage === 'es' ? 'active': ''}
            src={spainFlag} 
            alt="Mudar para Espanhol"
            onClick={() => setSelectedLanguage('es')}
            />

          <img 
            className={selectedLanguage === 'en' ? 'active': ''}
            src={usaFlag} 
            alt="Mudar para Inglês"
            onClick={() => setSelectedLanguage('en')}
          />
          
        </div>
      </header>
  );
}
