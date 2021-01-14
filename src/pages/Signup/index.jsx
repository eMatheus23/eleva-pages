import React, { useState } from 'react';

// CSS
import './styles.css';

// Components
import Footer from '../../components/footers/CheckoutFooter';
import HeaderSignup from '../../components/HeaderSignup';
import CreateAccountCard from '../../components/cards/CreateAccount';

const SignupAddress = () => {
  document.title = 'Criar Conta Premium | Elevagro';

  const [viewerStatus] = useState(() => {
    const checkIsLoggedIn = localStorage.getItem('@elevagro-app/viewer-status');

    if (checkIsLoggedIn) {
      return checkIsLoggedIn;
    }
    localStorage.setItem('@elevagro-app/viewer-status', 'visit');

    return 'visit';
  });

  return (
    <div id="page-signup">
      <HeaderSignup />

      <main>
        <CreateAccountCard renderPage={viewerStatus === 'visit' ? 1 : 2} />
      </main>

      <Footer />
    </div>
  );
};

export default SignupAddress;
