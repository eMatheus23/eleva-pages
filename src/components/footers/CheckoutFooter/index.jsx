import React from 'react';
import { Link } from 'react-router-dom';

import logoElevagro from '../../../assets/images/logos/marca-elevagro.svg';

import { Footer, Links } from './styles';
// import './styles.css';

const CheckoutFooter = () => {
  return (
    <Footer>
      <div>
        <p>© Todos os direitos reservados a</p>
        <img src={logoElevagro} alt="Elevagro" />
      </div>

      <Links>
        <Link to="/">Ajuda</Link>
        <Link to="/">Termos de uso</Link>
      </Links>
    </Footer>
  );
};

export default CheckoutFooter;
