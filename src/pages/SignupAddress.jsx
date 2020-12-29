import React from 'react';

// CSS
import '../styles/pages/signup.css';

// Components
import Footer from '../components/Footer';
import HeaderSignup from '../components/HeaderSignup';
import CreateAccountCard from '../components/cards/create-account/CreateAccount';

export default function SignupAddress() {
  return (
    <div id="page-signup">
      <HeaderSignup />

      <main>
        <CreateAccountCard renderPage={2} />
      </main>

      <Footer />
    </div>
  );
}
