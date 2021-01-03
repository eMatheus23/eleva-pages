import React, { useEffect, useState } from 'react';

// CSS
import './styles.css';

// Components
import Footer from '../../components/Footer';
import HeaderSignup from '../../components/HeaderSignup';
import CreateAccountCard from '../../components/cards/CreateAccount';

function SignupAddress() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedStatus = JSON.parse(
      sessionStorage.getItem('@elevagro-app/viewer-status|is-logged-in'),
    );

    setIsLoggedIn(isLoggedStatus);
  }, []);

  return (
    <div id="page-signup">
      <HeaderSignup />

      <main>
        <CreateAccountCard renderPage={isLoggedIn ? 2 : 1} />
      </main>

      <Footer />
    </div>
  );
}

export default SignupAddress;
