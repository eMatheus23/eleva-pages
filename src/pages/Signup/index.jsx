import React, { useState } from 'react';

import { Container } from './styles';

// // CSS
// import './styles.css';

// Components
import Footer from '../../components/footers/CheckoutFooter';
import HeaderSignup from '../../components/HeaderSignup';
import CreateAccountCard from '../../components/cards/CreateAccount';

import getViewerStatus from '../../services/getViewerStatus';

const SignupAddress = () => {
  document.title = 'Criar Conta | Elevagro';

  const [viewerStatus] = useState(getViewerStatus);

  return (
    <Container>
      <HeaderSignup />

      <main>
        <CreateAccountCard renderPage={viewerStatus === 'visit' ? 1 : 2} />
      </main>

      <Footer />
    </Container>
  );
};

export default SignupAddress;
